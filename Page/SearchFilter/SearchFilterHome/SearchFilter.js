import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

import { SIZES } from '../../../constants';

import NormalHeader from '../../../components/common/NormalHeader';
import SearchCriteria from '../SearchFilterComponent/SearchCriteria';
import SearchTag from '../SearchFilterComponent/SearchTag';
import SearchParking from '../SearchFilterComponent/SearchParking';
import SearchDecision from '../SearchFilterComponent/SearchDecision';
import AddTag from '../../AddTag/AddTag';

const SearchFilter = ({navigation, route}) => {
  //const {show} = route.params;
  useEffect(() => {
    console.log('SearchFilter 2/9')
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flex: 1,
        paddingLeft: SIZES.padding * 2.4,
        paddingRight: SIZES.padding * 2.4,
        }}
      >
        <NormalHeader 
          contents={['', '필터', '']} 
          fontsBold={'normal'}
        />
        <View style={styles.searchFilterHome}>
          <View style={styles.searchFilterComponent}>
            <SearchCriteria />
          </View>
          <View style={[styles.searchFilterComponent]}>
            <SearchTag />
          </View>
          <View style={[styles.searchFilterComponent, {paddingTop: 70}]}>
            <SearchParking />
          </View>
          <View style={styles.decisionButtonArea}>
            <SearchDecision />
          </View>
        </View>
        {
          //show && <AddTag show={show} />
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgb(255,255,255)',
  },
  searchFilterHome: {
    flex: 1
  },
  searchFilterComponent: {
    flex: 2.1,
    paddingTop: 20,
  },
  decisionButtonArea: {
    flex: 8,
  }
})

export default SearchFilter
