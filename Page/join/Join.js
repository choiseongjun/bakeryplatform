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
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import axios from 'axios';

const Join = ({navigation}) => {
    const [userId,setUserId] = useState('');
    const [nickname,setNickname] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');

    const doJoin = () =>{

      axios.post('/user/register',{userId:userId,nickname:nickname,password:password,email:email})
      .then(function (response) {
        // handle success
        console.log('성공했습니다!');
      })
      .catch((err)=>{
        console.log(err.response)
        Alert.alert(err.response.data)
      })
    }

    return ( 
        <ScrollView>
            <View style={{backgroundColor:COLORS.white,height:1100}}>
            
                <View style={styles.container}>
                    <Text style={styles.title}>회원가입후 다양한</Text>
                    <Text style={styles.title}>혜택을 즐겨보세요!</Text>
                </View>
                <View style={{marginLeft:30,marginTop:60}} >
                    <View>
                        <Text style={styles.label}>이메일 주소</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="asdfg@asdfg.com"
                            onChangeText={text => setEmail(text)}
                            value={email} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>아이디</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="아이디를 입력해주세요~"
                            onChangeText={text => setUserId(text)}
                            value={userId} 
                            />
                        <Text style={[styles.sublabel,{marginTop:20}]}>영문,숫자를 조합하여 최소2자 부터 20자이하로</Text>
                        <Text style={[styles.sublabel]}>입력해주세요.</Text>
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>닉네임</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="닉네임을 입력해주세요~"
                            onChangeText={text => setNickname(text)}
                            value={nickname} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>비밀번호</Text>
                        <TextInput
                            secureTextEntry={true} 
                            style={styles.inputbox}
                            placeholder=""
                            onChangeText={text => setPassword(text)}
                            value={password} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>비밀번호 확인</Text>
                        <TextInput
                            secureTextEntry={true}  
                            style={styles.inputbox}
                            placeholder="asdfg"
                            />
                    </View>
                </View>
                <View style={styles.joinContainer}>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => doJoin()}
                    style={[styles.joinBox, {backgroundColor:'#E17101', borderRadius: 20}]}>
                        <View>
                            <View
                            style={{
                                marginLeft: 12,
                                display:'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                
                            }}>
                            <Text style={styles.joinText} >
                                가입하기
                            </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>    
            </View>
            
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:30,
        left:30
    },
    title:{
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*4,
        color:'#E17101'
    },
    label:{
        fontSize:SIZES.base*2.5,
        marginTop:10
    },
    sublabel:{
        fontSize:SIZES.base*2,
        marginTop:10
    },
    inputbox:{
        height: 40,
        width:'80%', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        marginTop:10
    },
    joinContainer:{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop:60,
    },
    joinBox: {
        width: '80%',
        height:60,
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center',
    },
    joinText:{
        color:COLORS.white,
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*2.7
    },
})
export default Join
