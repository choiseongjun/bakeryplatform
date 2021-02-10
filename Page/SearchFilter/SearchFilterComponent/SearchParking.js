import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import TagBox from '../../../components/common/TagBox';

import {SIZES} from '../../../constants'

const SearchParking = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        fontSize:SIZES.base * 2.1,
        fontWeight: "bold",
        paddingBottom: SIZES.padding
      }}>
        주차여부
      </Text>
      <View style={styles.parkingBox}>
        <TagBox tagname="주차가능" isSpecial={true} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(255,255,255)',
    flexDirection: 'column'
  },
  parkingBox: {
    width: 90
  },
})

export default SearchParking