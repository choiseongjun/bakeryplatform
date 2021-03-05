import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing
} from 'react-native';
import {icons, SIZES} from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBreadSlice, faPlus } from '@fortawesome/free-solid-svg-icons'

const animationEndY = Math.ceil(SIZES.height);
const negativeEndY = animationEndY * -1;

function getRandomNumber(max) {
  return Math.ceil(Math.random()*max)
}

export default class FallingBread extends React.Component {
  constructor() {
    super();

    this.heightAnimation = this.state.yPosition.interpolate({
      inputRange: [0, animationEndY],
      outputRange: [0, negativeEndY]
    });

    this.opacityAnimation = this.heightAnimation.interpolate({
      inputRange: [negativeEndY, 0],
      outputRange: [1,0]
    });

    this.scaleAnimation = this.heightAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.4, 1],
      extrapolate:'clamp'
    });
  }
  state = {
    yPosition: new Animated.Value(-30),
    positionY: 0
  }

  componentDidMount() {
    this.animatedY()
  }

  breadOut = (id) => {
    this.props.breadOut(id)
  }

  animatedY = () => {
    Animated.sequence([
      Animated.timing(this.state.yPosition, {
        duration: getRandomNumber(2000),
        toValue: animationEndY,
        easing: Easing.ease,
        useNativeDriver: true
      }),
      ]).start(({finished}) => {
        this.breadOut(this.props.id)
      })
    }
  
  getanimate = () => {
    return {
      transform: [
        {translateY:this.state.yPosition},
      ],
      opacity: this.opacityAnimation
    }
  }

  render() {
    return (
      <Animated.View style={[styles.container, this.getanimate(), this.props.style]}>
        <View>
          <FontAwesomeIcon color='brown' icon={faBreadSlice} size={60}/>
        </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position:'absolute',
  }
})