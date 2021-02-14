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
import { useFocusEffect } from '@react-navigation/native';
import {useDispatch,useSelector } from 'react-redux';
import { USER_INFO_REQUEST } from '../../redux/reducers/userReducer';
import { DeviceEventEmitter } from 'react-native';

const Profile = ({navigation}) => {
    const dispatch = useDispatch();
    const [loginCheck,setLoginCheck] = useState(false);
    const { userinfoDone} = useSelector((state) => state.userReducer);
    let token = AsyncStorage.getItem('accessToken')
    useFocusEffect(
      React.useCallback(async () => {
        let token =await AsyncStorage.getItem('accessToken')
        console.log('token1',token)

        if(token===null){
          navigation.navigate("Login")
        }
      }, [])
    ); 
  
    // useFocusEffect(
    //   React.useCallback(() => {

    //     dispatch({
    //       type: USER_INFO_REQUEST 
    //     });
    //     console.log('loginCheck',loginCheck)
    //     console.log('userinfoDone',userinfoDone)
    //     if(!userinfoDone)
    //         navigation.navigate("Login")
    //   }, [loginCheck,userinfoDone])
    // );
    // useEffect(() => {
    //   DeviceEventEmitter.addListener('abc', () => {
        
    //     dispatch({
    //       type: USER_INFO_REQUEST 
    //     });
    //     console.log('userinfoDone',userinfoDone)
    //     if(!userinfoDone){
    //       navigation.navigate("Login")
    //     }
            
    //   })
    // }, [loginCheck,userinfoDone]);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.optionBar}>
          <NormalHeader contents={[icons.vividBlackBack, 'MY Page', icons.menubar]} />
        </View>
        <View style={styles.userContainer}>
          <View style={styles.userIntroDuctionBox}>
            <View style={styles.userIntroDuctionBox__image}>
              <Image style={{width: 50, height: 50}} source={icons.plus} />
            </View> 
            <View style={[styles.userIntroDuctionBox__name]}>
              <Text style={FONTS.h2}>skosi_7695</Text>
              <Image style={{width: 16, height: 16, marginLeft: 4}} source={icons.reverseBlackBack} />
            </View>
            <TouchableOpacity 
              style={styles.userIntroDuctionBox__id}
              onPress={() => {
                navigation.navigate('IndividualInfoCheck')
              }}
            >
              <Text style={[FONTS.body3],{color:COLORS.deepDarkgray}}>hok_00000@naver.com</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userHistory}>
            <TouchableOpacity 
              style={styles.userHistory__each}
              onPress={() => {
                navigation.navigate('Following')
              }}  
            >
              <Text style={{fontSize:17, color:COLORS.realDarkgray, fontWeight: 'bold'}}>팔로잉</Text>
              <Text style={{fontSize:15, color:COLORS.deepDarkgray,fontWeight:'normal', paddingTop: 10}}>182</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userHistory__each}>
              <Text style={{fontSize:17, color:COLORS.realDarkgray, fontWeight: 'bold'}}>내가 쓴 글</Text>
              <Text style={{fontSize:15, color:COLORS.deepDarkgray,fontWeight:'normal', paddingTop: 10}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.userHistory__each}
              onPress={() => {
                navigation.navigate('StorePost')
              }}
            >
              <Text style={{fontSize:17, color:COLORS.realDarkgray, fontWeight: 'bold'}}>저장한 글</Text>
              <Text style={{fontSize:15, color:COLORS.deepDarkgray,fontWeight:'normal', paddingTop: 10}}>12</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userChoiceOption}>
            <TouchableOpacity style={styles.eachUserChoice}>
              <Text style={styles.eachUserChoice__Text}>고객센터</Text>
              <Image source={icons.reverseBlackBack} style={[styles.eachUserChoice__image,{color:'white'}]}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.eachUserChoice}
              onPress={() => {
                navigation.navigate('ProfileAppSetting')
              }}  
            >
              <Text style={styles.eachUserChoice__Text}>환경설정</Text>
              <Image source={icons.reverseBlackBack} style={styles.eachUserChoice__image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachUserChoice}>
              <Text style={styles.eachUserChoice__Text}>회원탈퇴</Text>
              <Image source={icons.reverseBlackBack} style={styles.eachUserChoice__image}/>
            </TouchableOpacity>
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

  userIntroDuctionBox: {
    flex: 2,
    flexDirection:"column",
    justifyContent:'center',
    alignItems:'center',
  },
  
  userIntroDuctionBox__image: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userIntroDuctionBox__name: {
    paddingTop: 14,
    flexDirection:'row',
    alignItems:'center',
  },

  userIntroDuctionBox__id: {
    paddingTop: 6,
  },

  userHistory: {
    flex: 1.6,
    flexDirection:"row",
    justifyContent:'center',
  },

  userHistory__each: {
    flex: 1,
    alignItems:'center',
    flexDirection:'column',
  },

  userChoiceOption: {
    flex: 2,
    flexDirection:"column",
  },

  eachUserChoice: {
    flex:1,
    flexDirection:'row',
    borderTopWidth:1,
    borderColor:COLORS.darkgray,
    justifyContent:'space-between',
    alignItems:'center',
  },

  eachUserChoice__Text: {
    fontWeight: 'bold',
    fontSize:SIZES.h4
  },

  eachUserChoice__image: {
    width: 16, 
    height: 16,
    
  }
})

export default Profile
