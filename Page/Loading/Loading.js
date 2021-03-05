import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Animated,
  Easing
} from 'react-native'
import {SIZES} from '../../constants'
import FallingBread from '../../components/common/FallingBread'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBreadSlice, faPlus } from '@fortawesome/free-solid-svg-icons'

const animationEndY = Math.ceil(SIZES.height);
const negativeEndY = animationEndY * -1;
let fallingTime = getRandomNumber(1000);

function getRandomNumber(max) {
  return Math.ceil(Math.random()*max)
}


const Loading = () => {
  const breadCount = React.useRef(6);
  const [breads, setBreads] = React.useState([
    {
      id:0,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:1,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:2,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:3,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:4,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:5,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:6,
      right: getRandomNumber(SIZES.width)
    },
    {
      id:7,
      right: getRandomNumber(SIZES.width)
    },
  ])

  const breadOut = (id) => {
    //let brd = [...breads];
    //let brd = breads.filter((bread) => {
    //  return 
    //})
    setBreads([
      ...breads,
      {
        id:id,
        right: getRandomNumber(SIZES.width)
      }
    ], () => {
      breadCount.current++
    })
    console.log(breads)
  }
  //setInterval(setBreads([
  //  ...breads,
  //  {a
  //    id:id,
  //    right: getRandomNumber(SIZES.width)
  //  }
  //]))

  return (
    <SafeAreaView style={styles.container}>
      {
        breads.map((bread) => {
          return (
            <FallingBread
            breadOut={breadOut}
            key={bread.id} 
            id={bread.id}
            style={{right: bread.right}} 
            />
          )
        })
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    height:SIZES.height,
    flexDirection: 'row'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Noto'
  }
})

export default Loading