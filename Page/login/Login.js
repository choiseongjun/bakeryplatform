import React,{useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    Alert
} from 'react-native';
import { icons, SIZES, COLORS } from '../../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = ({navigation}) => {
    const [userId,setUserId] = useState('');
    const [password,setPassword] = useState('');

    const doLogin = () =>{

        axios.post('/user/login',{userId:userId,password:password})
        .then(function (response) {
          // handle success
          
          AsyncStorage.setItem('accessToken', response.data.token);
          AsyncStorage.setItem('refreshToken', response.data.refreshToken);
       
          Alert.alert('성공적으로 로그인이 되었습니다.');
          navigation.navigate("추천글");
        })
        .catch((err)=>{
          console.log(err.response)
          Alert.alert(err.response.data)
        })
    }

    return (
        <ScrollView>
        <View style={{backgroundColor:COLORS.white,height:800}}>
            <View style={styles.container}>
                <Text style={styles.title}>빵터짐</Text>
                <Text style={styles.text}>우리동네 진실된 빵집 리뷰</Text>
            </View>
            <View style={{marginTop:30,marginLeft:20}}>
                <View>
                    <Text style={[styles.label,{marginTop:60}]}>아이디를 입력해주세요.</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder=""
                        onChangeText={text => setUserId(text)}
                        value={userId}
                        />
                </View>
                <View>
                    <Text style={[styles.label,{marginTop:30}]}>비밀번호를 입력해주세요.</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputbox}
                        placeholder=""
                        onChangeText={text => setPassword(text)}
                        value={password}
                        /> 
                </View>
            </View>
            <View style={[styles.loginContainer,{marginTop:100}]}>
                <TouchableOpacity
                activeOpacity={1}
                onPress={() => doLogin()}
                style={[styles.loginBox, {backgroundColor:'#E17101', borderRadius: 20}]}>
                    <View style={styles.loginSection}>
                        <View
                        style={{
                            marginLeft: 12,
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            
                        }}>
                        <Text style={styles.loginText} >
                            로그인
                        </Text>
                        </View>
                    </View>
                </TouchableOpacity>
                
                <View style={{marginTop:30,borderBottomWidth:2,borderBottomColor:COLORS.maingray}}>
                    <Text>아이디 또는 비밀번호 찾기</Text>
                </View>
                <View style={{marginTop:30,borderBottomWidth:2,borderBottomColor:COLORS.maingray}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Join")}
                    >
                        <Text>회원가입하기</Text>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop:30,borderBottomWidth:2,borderBottomColor:COLORS.maingray}}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("추천글")}
                    >
                        <Text>메인화면으로</Text>
                    </TouchableOpacity>
                </View>
            </View>  
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container:{
        marginTop:80,
        marginLeft:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontFamily:'NotoSans-Black',
        marginTop:3,
        fontSize:SIZES.base*3.6,
        color:'#E17101'
    },
    text: {
        fontFamily:'NotoSans-Black',
        marginTop:3,
        fontSize:SIZES.base*2,
    },
    label:{
        fontSize:SIZES.base*2.5,
        marginTop:10
    },
    inputbox:{
        height: 40,
        width:'80%', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        marginTop:10
    },
    loginContainer:{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    loginBox: {
        height: 50,
        width: '80%',
        elevation: 2,
        justifyContent: 'center',
    },
    loginText:{
        color:COLORS.white,
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*2.7
    },
})
export default Login
