import React from 'react';
import {
  View,
  Modal,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import {SIZES, icons} from '../../../constants'
import TagBox from '../../../components/common/TagBox';

function SearchAddTag({navigation, setModalOpen}) {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.5)',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center'
      }}
    >
      <View style={{
        backgroundColor: 'rgba(255,255,255,1)',
        width: SIZES.width,
        height: 300
        }}
      >
        <View style={styles.container}>
          <View style={{flexDirection:'row', position:'relative'}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>태그</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setModalOpen(false)}
              style={{
                position: 'absolute',
                right:40,
                bottom: -6,
              }}
            >
              <Image 
              source={icons.closeBtn2} 
              style={{
                width: 30, 
                height: 30, 
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', marginTop:10}}>
            <TagBox tagname="#달달한"/>
            <TagBox tagname="입력해주세요"/>
            <TagBox tagname="+"/>
          </View>
          
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    marginTop:30,
    left:20
  },
})

export default SearchAddTag
