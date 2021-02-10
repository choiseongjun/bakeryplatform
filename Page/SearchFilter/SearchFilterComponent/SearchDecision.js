import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import CheckButton from '../../../components/common/CheckButton';

const SearchDecision = () => {
  return (
    <View style={styles.container}>
      <CheckButton content={'초기화'} isBgBlack={false} />
      <CheckButton content={'확인'} isBgBlack={true} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-end',
    paddingBottom: 20,
  }
})

export default SearchDecision