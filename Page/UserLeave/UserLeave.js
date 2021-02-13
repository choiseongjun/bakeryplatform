import React,{useEffect,useState,useRef} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NormalHeader from '../../components/common/NormalHeader';

const UserLeave = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);

    const [changeAttribute, setChangeAttribute] = useState({
      preTransparent: 0,
      transparent: 1,
      preBorderColor: COLORS.deepDarkgray,
      borderColor: 'red',
      prefontColor: COLORS.deepDarkgray,
      fontColor: 'white',
      preBgColor: 'white',
      BgColor: 'black'
    });
    const email = useRef('');
    const password = useRef('');
    const originalPassword = '123456';

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
    };


    const changeProp = () => {
      setChangeAttribute({
        preTransparent: 1,
        transparent:0,
        preBorderColor: 'red',
        borderColor: COLORS.deepDarkgray,
        prefontColor: COLORS.deepDarkgray,
        fontColor: 'white',
        preBgColor: 'white',
        BgColor: 'black'
      })
    }

    const defaultProp = () => {
      setChangeAttribute({
        preTransparent: 0,
        transparent:1,
        preBorderColor: 'black',
        borderColor: 'red',
        prefontColor: 'white',
        fontColor: COLORS.deepDarkgray,
        preBgColor: 'black',
        BgColor: 'white',
      })
    }

    const noEnter = () => {
      setChangeAttribute({
        preTransparent: 0,
        transparent:1,
        preBorderColor: COLORS.deepDarkgray,
        borderColor: 'red',
        prefontColor: COLORS.deepDarkgray,
        fontColor: 'white',
        preBgColor: 'white',
        BgColor: 'black',
      })
    }

    const comparePassword = () => {
      (originalPassword == password.current) ? defaultProp() : changeProp()
    };

    const nonePassword = () => {
      (password.current == '') && noEnter()
    };

    const pressTextBox = () => {
      setChangeAttribute({
        preTransparent: 0,
        transparent:1,
        prefontColor: COLORS.deepDarkgray,
        fontColor: 'white',
        preBorderColor: 'black',
        preBgColor: 'white',
        BgColor: 'black',
      })
    };

      
    useEffect(() => {
        // getUserData();
        // if(!loginCheck)
        //     navigation.navigate("Login")
    },[])

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white', flex: 1}}>
        <NormalHeader contents={[icons.vividBlackBack, 'My Page', icons.menubar, 3]} />
        <View style={styles.container}>
          <View style={styles.titleMessageBox}>
            <View style={styles.titleMessageBox_each}>
              <Text style={styles.titleMessageBox__text_big}>WITH BACKERY</Text>
              <Text style={styles.titleMessageBox__text_big}>정말 탈퇴하시겠어요?</Text>
            </View>
            <View style={styles.titleMessageBox_each}>
              <Text style={styles.titleMessageBox__text_small}>하단 고객님의 이메일 주소를 확인해주시고</Text>
              <Text style={styles.titleMessageBox__text_small}>
                <Text style={{color: 'black', fontWeight: 'bold'}}>
                  해당 비밀번호
                </Text>
                를 입력해주시면 탈퇴가 완료됩니다
              </Text>
            </View>
          </View>
          <View style={styles.inputBox}>
            <View style={styles.infoBox}>
              <Text style={styles.infoBox__titleName}>이메일 주소</Text>
              <View style={styles.infoBox__inputBox}>
                <TextInput 
                  style={[styles.infoBox__inputBox_textBox, {flex: 1}]}
                  onChangeText={ text => {email.current = text}}   
                  placeholder="hok_OOOOO@naver.com"
                >
                </TextInput>
              </View>
            </View>
            <View style={[styles.infoBox, {marginBottom: 0}]}>
              <Text style={styles.infoBox__titleName}>비밀번호</Text>
              <View style={styles.infoBox__inputBox}>
                <TextInput 
                  style={[styles.infoBox__inputBox_textBox, {flex: 1, borderColor: changeAttribute.preBorderColor}]}
                  onChangeText={
                    text => {
                      password.current = text;
                      comparePassword()
                      nonePassword()
                    }
                  }
                  onTouchStart={() =>{pressTextBox()}}
                  secureTextEntry={true}
                >
                </TextInput>
                
              </View>
            </View>
            <Text
                style={{opacity:changeAttribute.preTransparent, color: 'red', fontWeight: 'normal',paddingTop:20}}
              >
                비밀번호를 확인해주세요.
              </Text>
          </View>
          <View style={styles.decisionBox}>
            <TouchableOpacity style={[styles.decisionBox__Each, {backgroundColor: changeAttribute.preBgColor}]}>
              <Text style={[styles.decisionBox__Each_text, {color: changeAttribute.prefontColor}]}>회원 탈퇴</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: SIZES.padding * 2.4,
    paddingLeft: SIZES.padding * 2.4,
  },

  titleMessageBox: {
    flex: 2,
    paddingTop: 30,
  },

  titleMessageBox_each: {
    marginBottom: 20
  },

  titleMessageBox__text_big: {
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight:40,
  },

  titleMessageBox__text_small: {
    color: COLORS.realDarkgray,
    fontSize: 15,
    lineHeight: 25
  },

  inputBox: {
    flex: 2,
  },

  infoBox: {
    flexDirection: 'column',
    marginBottom: 34,
    paddingTop: 10,
    height: 76  ,
  },

  infoBox__titleName: {
    color: COLORS.black,
    fontSize: 16,
    
  },

  infoBox__inputBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'flex-end',
  },

  infoBox__inputBox_textBox: {
    borderBottomWidth: 1,
    borderColor: COLORS.deepDarkgray,
    flex: 0.94,
    color: COLORS.deepDarkgray,
    paddingBottom:5
  },

  infoBox__inputBox_textBox_text: {
    flex: 1,
    color: COLORS.deepDarkgray,
    fontWeight: 'bold',
  },

  decisionBox: {
    flex: 1,
  },

  decisionBox__Each: {
    borderWidth: 1,
    height:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.deepDarkgray
  },

  decisionBox__Each_text: {
    color: COLORS.deepDarkgray,
    fontWeight: 'bold',
    fontSize: 16
  }
})

export default UserLeave
