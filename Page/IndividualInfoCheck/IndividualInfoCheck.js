import React,{useEffect,useState, useRef} from 'react'
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

const IndividualInfoCheck = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);

    const [color, setColor] = useState({
      preColor: COLORS.deepDarkgray,
      color: 'white',
      preBgColor: 'white',
      bgColor: 'black'
    })

    const  originalEmail = 'hok_OOOOO@naver.com';
    const originalId = 'hokid';
    const originalNickname = 'hokk';
    const originalPassword = 1234;

    const email = useRef('hok_OOOOO@naver.com');
    const id = useRef('hokid');
    const nickname = useRef('hokk');
    const password = useRef('1234');
    const checkPassword = useRef('1234');

    const changeColor = () => {
      setColor({
        preColor: 'white',
        color: COLORS.deepDarkgray,
        preBgColor: 'black',
        bgColor: 'white'
      })
    }

    const defaultColor = () => {
      setColor({
        preColor: COLORS.deepDarkgray,
        color: 'white',
        preBgColor: 'white',
        bgColor: 'black'
      })
      
    }

    const checkOriginalState = () => {
      (originalEmail != email.current) || (originalId != id.current) || (originalNickname != nickname.current) ?
      changeColor() : defaultColor() 
    }

    const isSamePassword = () => {
      (password.current == checkPassword.current) ? alert('비밀번호가 일치합니다') : alert('비밀번호가 일치하지 않습니다')
    }
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
                navigation.navigate('IndividualInfoCheck')
              }}
            >
              <Text style={[FONTS.body3],{color:COLORS.deepDarkgray}}>hok_00000@naver.com</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>이메일 주소</Text>
            <View style={styles.infoBox__inputBox}>
              <TextInput 
                style={styles.infoBox__inputBox_textBox}
                placeholder={'이메일을 입력하세요'}
                onChangeText={text => {
                  email.current = text;
                  checkOriginalState();
                  }
                }
              >
                <Text style={styles.infoBox__inputBox_textBox_text}>{email.current}</Text>
              </TextInput>
              <View style={styles.infoBox__inputBox_remindDiv}>
                <Text style={styles.infoBox__inputBox_remindDiv__text}>
                  인증완료
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>아이디</Text>
            <View style={styles.infoBox__inputBox}>
              <TextInput 
                style={[styles.infoBox__inputBox_textBox, {flex: 1}]}
                onChangeText={text => {
                  id.current = text;
                  checkOriginalState();
                }}  
                placeholder={'아이디를 입력하세요'}
              >
                <Text style={styles.infoBox__inputBox_textBox_text}>{id.current}</Text>
              </TextInput>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>닉네임</Text>
            <View style={styles.infoBox__inputBox}>
              <TextInput 
                style={[styles.infoBox__inputBox_textBox, {flex: 1}]}
                onChangeText={
                  text => {
                    nickname.current = text;
                    checkOriginalState();
                  }}    
              >
                <Text style={[styles.infoBox__inputBox_textBox_text, {color: 'black'}]}>{nickname.current}</Text>
              </TextInput>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>비밀번호</Text>
            <View style={styles.infoBox__inputBox}>
              <TextInput 
                style={[styles.infoBox__inputBox_textBox, {flex: 1}]}
                onChangeText={
                  text => {
                    password.current = text;
                    checkOriginalState();
                  }
                }   
              >
                <Text style={styles.infoBox__inputBox_textBox_text}>
                </Text>
              </TextInput>
            </View>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoBox__titleName}>비밀번호 확인</Text>
            <View style={styles.infoBox__inputBox}>
              <TextInput 
                style={styles.infoBox__inputBox_textBox}
                onChangeText={text => {
                  checkPassword.current = text
                }}    
              >
                <Text style={styles.infoBox__inputBox_textBox_text}></Text>
              </TextInput>
              <TouchableOpacity 
                style={[
                  styles.infoBox__inputBox_remindDiv, 
                  {
                    backgroundColor:'white', 
                    borderWidth:1, 
                    borderColor:COLORS.realDarkgray
                  }
                ]}
                onPress={() => {
                  isSamePassword()
                }}
              >
                <Text style={styles.infoBox__inputBox_remindDiv__text}>
                  중복확인
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.decisionBox}>
            <TouchableOpacity style={[styles.decisionBoxEach,{borderWidth: 1, borderColor: COLORS.deepDarkgray, backgroundColor: color.preBgColor,}]}>
              <Text style={[styles.decisionBoxEach__Text, {color: color.preColor}]}>회원정보 수정</Text>
            </TouchableOpacity> 
            <TouchableOpacity 
              style={[styles.decisionBoxEach,{backgroundColor:COLORS.lightGray}]}
              onPress={() => {
                navigation.navigate('UserLeave')
              }}
            >
              <Text style={styles.decisionBoxEach__Text}>회원 탈퇴</Text>
            </TouchableOpacity> 
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
    marginTop: 10,
    paddingTop: 10,
    height: 80,
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
    borderBottomColor: COLORS.darkgray,
    flex: 0.94,
    color: COLORS.deepDarkgray,
    paddingBottom:10
  },

  infoBox__inputBox_textBox_text: {
    flex: 1,
    color: COLORS.deepDarkgray,
    fontWeight: 'bold',
  },

  infoBox__inputBox_remindDiv: {
    backgroundColor: COLORS.lightGray3,
    justifyContent:'center',
    alignItems:'center',
    padding: 10
  },

  infoBox__inputBox_remindDiv__text: {
    color: COLORS.realDarkgray,
    fontWeight: 'bold',
  },

  decisionBox: {
    marginTop: 60,
    flex: 1,
    flexDirection: 'column'
  },

  decisionBoxEach: {
    flex: 1,
    height: 60,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  decisionBoxEach__Text: {
    color:COLORS.deepDarkgray,
    fontWeight: 'bold',
    fontSize: SIZES.h4
  }
})

export default IndividualInfoCheck
