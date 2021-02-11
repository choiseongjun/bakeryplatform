import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput
} from 'react-native';
import { icons, SIZES, COLORS } from '../../constants';

const Login = ({navigation}) => {
    return (
        <ScrollView>
        <View style={{backgroundColor:COLORS.white,height:800}}>
            <View style={styles.container}>
                <Text style={styles.title}>안녕하세요</Text>
                <Text style={styles.title}>WITH BAKERY</Text>
                <Text style={styles.title}>입니다.</Text>
            </View>
            <View style={{marginTop:30,marginLeft:20}}>
                <View>
                    <Text style={[styles.label,{marginTop:60}]}>아이디를 입력해주세요.</Text>
                    <TextInput
                        style={styles.inputbox}
                        placeholder="asdfg"
                        onChangeText={text => onChangeText(text)}
                        />
                </View>
                <View>
                    <Text style={[styles.label,{marginTop:60}]}>비밀번호를 입력해주세요.</Text>
                    <TextInput
                        secureTextEntry={true}
                        style={styles.inputbox}
                        placeholder="asdfg"
                        onChangeText={text => onChangeText(text)}
                        /> 
                </View>
            </View>
            <View style={[styles.loginContainer,{marginTop:40}]}>
                <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Login')}
                style={[styles.loginBox, {backgroundColor: COLORS.black}]}>
                    <View style={styles.loginSection}>
                        
                        <View
                        style={{
                            marginLeft: 12,
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
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
            </View>  
           
        </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({

    container:{
        marginTop:80,
        marginLeft:20
    },
    title:{
        fontFamily:'NotoSans-Black',
        marginTop:3,
        fontSize:SIZES.base*3.6
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
