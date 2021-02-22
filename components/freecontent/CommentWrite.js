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

const CommentWrite = ({freeContentId,commentList,setCommentList}) => {
    const [comment,setComment] = useState('');

    useEffect(() => {
      

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
                onPress={submitComment}
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
