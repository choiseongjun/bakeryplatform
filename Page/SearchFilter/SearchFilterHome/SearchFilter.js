import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Modal
} from 'react-native';

import { SIZES } from '../../../constants';

import NormalHeader from '../../../components/common/NormalHeader';
import SearchCriteria from '../SearchFilterComponent/SearchCriteria';
import SearchTag from '../SearchFilterComponent/SearchTag';
import SearchParking from '../SearchFilterComponent/SearchParking';
import SearchDecision from '../SearchFilterComponent/SearchDecision';
import Require from '../../../components/common/RequireLogin';
import AddTag from '../../AddTag/AddTag';
import RequireLogin from '../../../components/common/RequireLogin';
import SearchAddTag from '../../SearchFilter/SearchFilterComponent/SearchAddTag';

const SearchFilter = ({navigation}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [show, setShow] = useState(false);
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
            <SearchTag navigation={navigation} setModalOpen={setModalOpen} />
          </View>
          <View style={[styles.searchFilterComponent, {paddingTop: 70}]}>
            <SearchParking />
          </View>
          <View style={styles.decisionButtonArea}>
            <SearchDecision />
          </View>
        </View>
        
        {/*
          show && <AddTag setShow={setShow} />
        */}
      </View>
      <Modal
          transparent={true}
          visible={modalOpen}
          style={{width: 300}}
          animationType='slide'
        >
          <SearchAddTag navigation={navigation} setModalOpen={setModalOpen} />
        </Modal>
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
