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

const RequireLogin = ({navigation,setModalOpen}) => {
    return (
        <View style={{
            width:SIZES.width,
            height:SIZES.height,
            backgroundColor:'rgba(0,0,0,0)',
            flexDirection: 'column',
            alignItems:'center',
            justifyContent:'center',
            }}
        >
            <View style={{
                    backgroundColor: 'rgba(255,255,255,1)',
                    width: 350,
                    height: 500}}>
                <View style={styles.container}>
                    <View style={{flexDirection:'row'}}>
                        <View>
                            <Text style={styles.loginTitle}>먼저 로그인을 해주세요.</Text>
                            {/* <Text style={styles.loginTitle}>빵집 후기를</Text>
                            <Text style={styles.loginTitle}>즐겨보세요.</Text> */}
                        </View>
                        <View style={{top: -10}}>
                            <TouchableOpacity
                                activeOpacity={1}
                                onPress={() => setModalOpen(false)}
                            > 
                                    <Text>닫기</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    
                </View>
                <View style={styles.container}>
                    <View style={{display: 'flex',flexDirection: 'row'}}>
                        <Text style={styles.loginsubTitle}>우리동네 빵집</Text><Text style={[styles.loginsubTitle,{fontFamily:'NotoSans-Black',top:-2,marginLeft:5}]}>후기!</Text>
                   </View>
                   <Text style={[styles.loginsubTitle,{flexWrap:'wrap',width:'85%',marginTop:10}]}>로그인 후 소통해보아요.</Text>
                </View>
                <View >
                    <View style={[styles.loginContainer,{marginTop:40}]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                            navigation.navigate('Login');
                            setModalOpen(false);
                        }}
                        style={[styles.loginBox, {backgroundColor: COLORS.bread}]}>
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
                        onPress={() => {setModalOpen(false);navigation.navigate('Join')}}
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
        </View>
    ) 
}
const styles = StyleSheet.create({
    container:{
        marginTop:50,
        left:20,
    },
    loginTitle:{
        fontSize:SIZES.base*3.8,
        fontWeight:'bold',
        fontFamily:'NotoSans-Black',
        color:COLORS.bread
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
