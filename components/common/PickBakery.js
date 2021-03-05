import React,{useEffect,useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    SafeAreaView
} from 'react-native';
import {SIZES} from '../../constants'

function PickBakery({source, navigation}) {
  return (
    <View style={styles.mainCon}>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('')
        }}
        style={styles.pickBakeryImageBox}
      >
        <Image 
          style={styles.pickBakeryImage}
          source={{uri: source}} 
        />
      </TouchableOpacity>
      
    </View>
  )
}

const styles = StyleSheet.create({
  mainCon: {
    flexDirection: 'row',
  },
  pickBakeryImageBox: {
    padding:20
  },
  pickBakeryImage: {
    width: SIZES.width/3,
    height: SIZES.width/3,
    borderRadius: 10
  }
})

export default PickBakery
