import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';

const RequireLogin = () => {
    return (
        <View style={{
            flex: 1, 
            backgroundColor:'rgba(0,0,0,0.5)',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'}}>
            <View style={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    opacity:1,
                    width: 350,
                    height: 500}}>
                <View style={styles.container}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalOpen(false)}>
                                <Text style={{position: 'absolute',right:40}}>X</Text>
                    </TouchableOpacity>
                    <Text style={styles.loginTitle}>로그인 후,</Text>
                    <Text style={styles.loginTitle}>다양한 컨텐츠를</Text>
                    <Text style={styles.loginTitle}>즐겨보세요.</Text>
                    {/* <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setModalOpen(false)}>
                        <Text>닫기 ㅇ</Text>
                   </TouchableOpacity> */}
                </View>
                <View style={styles.container}>
                    <View style={{display: 'flex',flexDirection: 'row'}}>
                        <Text style={styles.loginsubTitle}>내 주변 베이커리</Text><Text style={[styles.loginsubTitle,{fontFamily:'NotoSans-Black',top:-2,marginLeft:5}]}>맛집 소개와 후기!</Text>
                   </View>
                   <Text style={[styles.loginsubTitle,{flexWrap:'wrap',width:'85%',marginTop:10}]}>다양한 베이커리 컨텐츠를 {'\n'}소통하고 즐겨보세요</Text>
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
                </View>
                <View style={[styles.loginContainer,{marginTop:10}]}>
                   <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.loginBox, {backgroundColor: COLORS.white,borderColor: COLORS.black,borderWidth:1}]}>
                    <View style={styles.loginSection}>
                       
                        <View
                        style={{
                            marginLeft: 12,
                            display:'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={styles.joinText} >
                            회원기입
                        </Text>
                        </View>
                    </View>
                    </TouchableOpacity>
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
    loginTitle:{
        fontSize:SIZES.base*3.8,
        fontWeight:'bold',
        fontFamily:'NotoSans-Black'
    },
    loginsubTitle:{
        fontSize:SIZES.base*2.4,
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
    joinText:{
        color:COLORS.black,
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*2.7
    }
})
export default RequireLogin
