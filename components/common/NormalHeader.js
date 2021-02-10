import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import { COLORS, SIZES } from '../../constants';

const NormalHeader = ({contents, fontsBold}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={{
          color:COLORS.darkgray,
          fontWeight: 'bold',
          fontSize:SIZES.base*2,
          }}
        >
          {contents[0]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          fontSize:SIZES.base*2.4,
          fontWeight:'normal'
          }}
        >
        {contents[1]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          fontWeight: fontsBold,
          fontSize:SIZES.base*2,
        }}>
        {contents[2]}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingLeft: SIZES.padding * 2.4,
    paddingRight: SIZES.padding * 2.4,
  }
})

export default NormalHeader 