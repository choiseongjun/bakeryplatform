import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {COLORS} from '../../constants'

const CheckButton = ({content, isBgBlack}) => {

  return (
    <View style={styles.container}>
      {
        isBgBlack ? 
          <TouchableOpacity style={[styles.checkButtonBox, {backgroundColor: COLORS.black}]} >
            <Text style={{color:'white'}}>{content}</Text>
          </TouchableOpacity>
        :
          <TouchableOpacity style={[styles.checkButtonBox, {backgroundColor: COLORS.lightGray }]} >
            <Text style={{color:COLORS.black}}>{content}</Text>
          </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent:'flex-end',
    height:60,
    marginRight: 14
  },
  checkButtonBox: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  }
})

export default CheckButton