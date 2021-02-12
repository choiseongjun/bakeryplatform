import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Touchable,
  Image
} from 'react-native';
import { COLORS, SIZES } from '../../constants';

const NormalHeader = ({contents}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container }>
      <TouchableOpacity 
        style={{borderWidth: 1}}
        onPress={ () => {
          navigation.goBack()
        }}
      >
        <View style={{
          color:COLORS.black,
          position: 'absolute',
          left: SIZES.padding * 2.4,
          bottom: -14,
          }}
        >
          <Image source={contents[0]} style={{width: SIZES.base*2.4, height: SIZES.base*2.4}} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{
          fontSize:SIZES.base*2.4,
          fontWeight:'bold',
          }}
        >
        {contents[1]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth: 1}}>
        <View style={{
          color:COLORS.black,
          position: 'absolute',
          right: SIZES.padding * 2.4,
          bottom: -14,
        }}>
          <Image source={contents[2]} style={{width: SIZES.base*2.4, height: SIZES.base*2.4}} />
        </View>
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

    position: 'relative',
  }
})

export default NormalHeader 