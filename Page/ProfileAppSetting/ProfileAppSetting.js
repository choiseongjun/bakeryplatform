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
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NormalHeader from '../../components/common/NormalHeader';

const ProfileAppSetting = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);

    /*
    *로그인 유무 체크
    */
    const getUserData = async () => {
        try {
          const value = await AsyncStorage.getItem('accessToken')
          if(value !== null) {
            // value previously stored
            setLoginCheck(true);
          }
        } catch(e) {
          // error reading value
        }
    }
      
    useEffect(() => {
        // getUserData();
        // if(!loginCheck)
        //     navigation.navigate("Login")
    },[])

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.optionBar}>
          <NormalHeader contents={[icons.vividBlackBack, 'App Setting', icons.menubar]} />
        </View>
        <View style={styles.userContainer}>
          <View style={styles.userChoiceOption}>
            <TouchableOpacity style={[styles.eachUserChoice, {borderTopWidth: 0}]}>
              <Text style={styles.eachUserChoice__Text}>푸시 설정</Text>
              <Image source={icons.reverseBlackBack} style={[styles.eachUserChoice__image,{color:'white'}]}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.eachUserChoice, {flex: 1.5}]}
              onPress={() => {
                navigation.navigate()
              }}  
            >
              <View>
                <Text style={styles.eachUserChoice__Text}>광고 설정</Text>  
                <Text style={styles.eachUserChoice__Text_small}>광고를 On/Off하실 수 있습니다</Text>
              </View>
              
              <Image source={icons.reverseBlackBack} style={styles.eachUserChoice__image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachUserChoice}>
              <Text style={styles.eachUserChoice__Text}>로그아웃</Text>
              <Image source={icons.reverseBlackBack} style={styles.eachUserChoice__image}/>
            </TouchableOpacity>
          </View>
          <View style={styles.userPadding}>

          </View>
        </View>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingRight: SIZES.padding * 2.4,
    paddingLeft: SIZES.padding * 2.4,
  },

  optionBar: {

  },

  userChoiceOption: {
    flex: 1,
    flexDirection:"column",
  },

  eachUserChoice: {
    flex:1,
    flexDirection:'row',
    borderBottomWidth:1,
    borderColor:COLORS.darkgray,
    justifyContent:'space-between',
    alignItems:'center',
  },

  eachUserChoice__Text: {
    fontWeight: 'bold',
    fontSize:SIZES.h4
  },

  eachUserChoice__Text_small: {
    color:COLORS.deepDarkgray,
    paddingTop: 10
  },

  eachUserChoice__image: {
    width: 16, 
    height: 16,
  },

  userPadding: {
    flex: 2
  }
})

export default ProfileAppSetting
