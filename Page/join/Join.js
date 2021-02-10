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
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
const Join = ({navigation}) => {
    const [value, onChangeText] = React.useState('');

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
                            onChangeText={text => onChangeText(text)}
                            value={value} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>아이디</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="asdfg"
                            onChangeText={text => onChangeText(text)}
                            value={value} 
                            />
                        <Text style={[styles.sublabel,{marginTop:20}]}>영문,숫자를 조합하여 최소2자 부터 20자이하로</Text>
                        <Text style={[styles.sublabel]}>입력해주세요.</Text>
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>닉네임</Text>
                        <TextInput
                            style={styles.inputbox}
                            placeholder="asdfg"
                            onChangeText={text => onChangeText(text)}
                            value={value} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>비밀번호</Text>
                        <TextInput
                            secureTextEntry={true} 
                            style={styles.inputbox}
                            placeholder="asdfg"
                            onChangeText={text => onChangeText(text)}
                            value={value} 
                            />
                    </View>
                    <View>
                        <Text style={[styles.label,{marginTop:60}]}>비밀번호 확인</Text>
                        <TextInput
                            secureTextEntry={true}  
                            style={styles.inputbox}
                            placeholder="asdfg"
                            onChangeText={text => onChangeText(text)}
                            value={value} 
                            />
                    </View>
                </View>
                <View style={styles.joinContainer}>
                    <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => navigation.navigate('Login')}
                    style={[styles.joinBox, {backgroundColor: COLORS.black}]}>
                        <View>
                            <View
                            style={{
                                marginLeft: 12,
                                display:'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
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
