import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';

import {COLORS, icons, SIZES} from '../../constants'

const CircleButton = ({standardText}) => {
  const [isClicked, setIsClicked] = useState(true)
  
  return (
    <View style={styles.container}>
      {
        isClicked ? 
        <TouchableOpacity 
          onPress={() => {
            setIsClicked(false)
          }}
          style={styles.CircleButtonBox}>
            <Image
              source={icons.grayCircle}
              resizeMode="contain"
              style={{
                width:SIZES.base* 1.8,
                height:SIZES.base* 1.8,
                marginRight: 5
                
              }}
            />
            <Text
              style={{
                fontSize: SIZES.font,
                color: COLORS.darkgray
              }}
            >
              {standardText}
            </Text>  
        </TouchableOpacity>
        :
        <TouchableOpacity 
          onPress={() => {
            setIsClicked(true)
          }}
          style={styles.CircleButtonBox}>
            <Image
              source={icons.blackCircle}
              resizeMode="contain"
              style={{
                width:SIZES.base* 1.8,
                height:SIZES.base* 1.8,
                marginRight: 5
                
              }}
            />
            <Text
              style={{
                fontSize: SIZES.font
              }}
            >
              {standardText}
            </Text>  
        </TouchableOpacity>
      }
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  CircleButtonBox: {
    flexDirection:'row'
  }
})

export default CircleButton