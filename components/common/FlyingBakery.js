import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Touchable,
  Animated,
  Dimensions,
  Easing
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBreadSlice, faPlus } from '@fortawesome/free-solid-svg-icons'

const {height, width} = Dimensions.get('window');

let animationHeight = Math.ceil(height*0.4)
let negativeAnimationHeight = -1*animationHeight
let breadCount = 1;

function getRandomNumber(max) {
  return Math.floor(Math.random() * max)
}

function getRandomColor() {
  return `rgb(${getRandomNumber(250)}, ${getRandomNumber(132)}, ${getRandomNumber(20)})`
}

export default class FlyingBakery extends React.Component {
  state ={  
    breads:[]
  };

  addBread = () => {
    this.setState({
      breads: [
        ...this.state.breads,
        {
          id: breadCount,
          right:getRandomNumber(width/3),
          color: getRandomColor()
        }
      ]
    }, () => {
      breadCount++
    })
  }

  render() {
    return (
      <View>
        <View>
          {
            this.state.breads.map((bread) => {
              return (
                <BreadContaienr
                  key={bread.id}
                  style={{right: bread.right}}
                  color={bread.color}
                />
              )
            })
          }
        </View>
        <TouchableOpacity 
          onPress={this.addBread}
          style={{ width: 60, height: 60, padding: 20, backgroundColor:'#EE7000', justifyContent:'center', alignItems:'center', borderRadius: 25}}
        >
          <FontAwesomeIcon icon={faPlus} size="20" color="white" />
        </TouchableOpacity>
      </View>
      
    )
  }
}

class BreadContaienr extends React.Component {
  constructor() {
    super();

    this.heightAnimation = this.state.position.interpolate({
      inputRange: [negativeAnimationHeight, 0],
      outputRange: [animationHeight, 0]
    });

    this.opacityAnimation = this.heightAnimation.interpolate({
      inputRange: [0, animationHeight],
      outputRange: [1, 0]
    });

    this.widthAnimation = this.heightAnimation.interpolate({
      inputRange: [0, animationHeight/6, animationHeight/3, animationHeight/2, animationHeight],
      outputRange: [0, 25, 15, 0, 10]
    });

    this.rotateAnimation = this.heightAnimation.interpolate({
      inputRange: [0, animationHeight/6, animationHeight/3, animationHeight/2, animationHeight],
      outputRange: ["0deg", "-5deg", "0deg", "5deg", "0deg"]
    });

    this.scaleAnimation = this.heightAnimation.interpolate({
      inputRange: [0, 15, 30],
      outputRange: [0, 1.4, 1],
      extrapolate:'clamp'
    })
  }

  state = {
    position: new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(this.state.position, {
      duration: 2000,
      toValue: negativeAnimationHeight,
      easing:Easing.ease,
      useNativeDriver: true
    }).start()
  }

  getTransform() {
    return {
      transform: [
        {translateY: this.state.position},
        {translateX: this.widthAnimation},
        {rotate: this.rotateAnimation},
        {scale: this.scaleAnimation}
      ],
      opacity: this.opacityAnimation
    }
  }

  render() {
    return (
      <Animated.View style={[styles.breadContainer, this.props.style, this.getTransform()]}>
        <Bread color={this.props.color}/>
      </Animated.View>
    )
  }
}

const Bread = props => (
  <View {...props}>
    <FontAwesomeIcon size={40} color={props.color} icon={faBreadSlice} />
  </View>
)

const styles = StyleSheet.create({
  breadContainer: {
    position: 'absolute',
    bottom: -100
  }
})

