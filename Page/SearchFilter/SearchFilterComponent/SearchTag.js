import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

import { icons, COLORS, SIZES, FONTS } from '../../../constants';

import TagBox from '../../../components/common/TagBox';
import AddTag from '../../../Page/AddTag/AddTag';

const SearchTag = ({navigation}) => {
  
  let wholeTag = [
    {id: 1, tagname: '#분위기좋은', isSpecial: false},
    {id: 2, tagname: '#데이트', isSpecial: false},
    {id: 3, tagname: '+', isSpecial: false},
    {id: 4, tagname: '#겉바속촉', isSpecial: false},
    {id: 5, tagname: '#마카롱', isSpecial: false},
    {id: 6, tagname: '#겉바속촉', isSpecial: false},
    {id: 7, tagname: '#마카롱', isSpecial: false},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={{
          fontSize:SIZES.base * 2.1,
          fontWeight: "bold",
          paddingBottom: 10,
          marginRight: 5
          }}
        >
          태그
        </Text>
        <Text style={{
          fontSize:SIZES.base * 1.5,
          fontWeight: "bold",
          color: COLORS.darkgray,
          paddingBottom: 10,
          
          }}
        >
          태그는 최대 5개까지 추가할 수 있습니다
        </Text>
      </View>
      <View style={styles.moodContainer}>
          {
            wholeTag.map((content) => {
              return (
                <TagBox 
                key={content.id} 
                tagname={content.tagname}
                isSpecial={content.isSpecial}
                />
              );
            })
          }
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems:'flex-end',
    flex: 1,
    
  },
  moodContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "wrap"
  },
})

export default SearchTag