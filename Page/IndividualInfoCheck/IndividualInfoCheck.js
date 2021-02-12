import React,{useEffect,useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    SafeAreaView,
    TextInput
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
        <NormalHeader contents={[icons.vividBlackBack, 'MY Page', icons.menubar]} />
        <ScrollView style={styles.userContainer}>
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
                navigation.navigate
              }}
            >
              <Text style={[FONTS.body3],{color:COLORS.deepDarkgray}}>hok_00000@naver.com</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>이메일 주소</Text>
            <View style={styles.infoBox__inputBox}>
              <View style={styles.infoBox__inputBox_textBox}>
                <Text style={styles.infoBox__inputBox_textBox_text}>hok_OOOOO@naver.com</Text>
              </View>
              <View style={styles.infoBox__inputBox_remindDiv}>
                <Text>
                  인증완료
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingRight: SIZES.padding * 2.4,
    paddingLeft: SIZES.padding * 2.4,
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

  infoBox: {
    flexDirection: 'column',
    paddingTop: 30
  },

  infoBox__titleName: {
    color: COLORS.black,
    paddingBottom: 10
  },

  infoBox__inputBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  infoBox__inputBox_textBox: {
    borderBottomWidth: 1,
    flex: 0.8,
    justifyContent:'flex-end',
    color: COLORS.deepDarkgray
  },

  infoBox__inputBox_textBox_text: {
    borderBottomWidth: 1,
    flex: 1,
    color: COLORS.deepDarkgray
  },

  infoBox__inputBox_remindDiv: {
    borderWidth: 1,
    padding: 10
  }
})

export default Profile
