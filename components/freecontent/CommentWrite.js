import React,{useState,useEffect} from 'react'
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
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RequireLogin from '../common/RequireLogin';

const CommentWrite = ({navigation,setModalOpen,freeContentId,commentList,setCommentList}) => {
    const [comment,setComment] = useState('');
    const [loginmodalOpen, setLoginModalOpen] = useState(false);//로그인모달창 오픈여부
    const [tokenValid,setTokenValid] = useState(false);

    useEffect(() => {
        let token = AsyncStorage.getItem('accessToken')

        token.then((item)=>{
          if(item!==null){
            setTokenValid(true);
          }
        })

    },[])

    const submitComment = () =>{
        axios.post(`/contents/reply/write/${freeContentId}`,{content:comment})
        .then(function (response) {
            console.log('cmtddd',response.data)
            setComment('');
            setCommentList([response.data, ...commentList]);
            
            Alert.alert('글 등록이 완료되었습니다.');
        }) 
        .catch(function (error) {
            console.log(error);
        }); 
    }

    return (
        <View style={{height:70,backgroundColor:COLORS.white,borderTopColor:COLORS.darkgray,borderTopWidth:1}}>
                <Modal animationType="slide" visible={loginmodalOpen} >
                    {loginmodalOpen&&<RequireLogin  navigation={navigation} setModalOpen={setLoginModalOpen} />}
                </Modal> 
            <View style={{display: 'flex',flexDirection: 'row'}}>
            <TextInput
                style={styles.inputbox}
                placeholder="자유롭게 댓글을 입력해주세요!"
                onChangeText={text => setComment(text)}
                value={comment}
            />
            <TouchableOpacity
                style={{marginTop:18}}
                activeOpacity={1}
                onPress={()=>{
                        if(!tokenValid){
                            Alert.alert('먼저 로그인을 해주세요!')
                        }else{
                            console.log('write')
                            submitComment()
                        }

                }}
            >
                <Text style={{fontSize:SIZES.base*2.8}}>등록</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    inputbox:{
        height: 60,
        fontSize:19,
        width:'80%', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,
        marginTop:10,
        paddingLeft:30

    },
})
export default CommentWrite
