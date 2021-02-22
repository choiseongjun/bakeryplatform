import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';

import {SIZES} from '../../constants'

function Loading() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={[styles.titleText, {fontFamily:'NotoSans-Black'}]}>WITH BACKERY</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Noto'
  }
})

export default Loading
