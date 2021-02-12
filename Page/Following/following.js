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

const Profile = ({navigation}) => {

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
          <NormalHeader contents={[icons.vividBlackBack, 'MY Page', icons.menubar]} />
        </View>
        <View style={styles.userContainer}>
          <View style={styles.userFollowing}>
            <TouchableOpacity style={styles.eachUserFollowing}>
              <View style={styles.eachUserFollowing__image}>
                <Image 
                source={icons.plus}
                style={{
                  width: 30,
                  height: 30,
                }}
                />
                <Text style={[styles.eachUserFollowing__Text]}>고객센터</Text>
              </View>
              
              <Image source={icons.reverseBlackBack} style={[styles.eachUserChoice__image,{color:'white'}]}/>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.eachUserFollowing}
              onPress={() => {
                navigation.navigate('ProfileAppSetting')
              }}  
            >
              <Text style={styles.eachUserFollowing__Text}>환경설정</Text>
              <Image source={icons.reverseBlackBack} style={styles.eachUserChoice__image}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.eachUserFollowing}>
              <Text style={styles.eachUserFollowing__Text}>회원탈퇴</Text>
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

  userFollowing: {
    flex: 1,
    flexDirection:"column",
  },

  eachUserFollowing: {
    height: 70,
    borderWidth: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  eachUserFollowing__Text: {
    fontWeight: 'bold',
    fontSize:SIZES.font
  },

  eachUserChoice__image: {
    width: 16, 
    height: 16, 
  },

  eachUserFollowing__image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Profile
