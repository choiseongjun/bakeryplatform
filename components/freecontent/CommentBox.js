import React,{useEffect,useState} from 'react'
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
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CommentBox = ({setModalOpen,freeContentId,contentDetail}) => {


    // useEffect(() => {
    //     console.log('contentDetail',contentDetail)
    // },[])
    const [likeCheck,setLikeCheck] = useState(false);
    const [commentLikeCnt,setCommentLikeCnt] = useState(0);
    const [tokenValid,setTokenValid] = useState(false);

    useEffect(() => {
        setCommentLikeCnt(contentDetail.commentLikeCnt)
        setLikeCheck(contentDetail.commentLikeCheck)
    },[contentDetail])
    
    useEffect(() => {
        let token = AsyncStorage.getItem('accessToken')

        token.then((item)=>{
          if(item!==null){
            setTokenValid(true);
          }
        })

    },[])

    console.log('contentDetail.commentLikeCnt',contentDetail.commentLikeCnt)
    const commentLike = () =>{

        if(!tokenValid)
            return Alert.alert('로그인을 해주세요.');

        if(likeCheck){
            console.log('already like')
            axios.delete(`/contents/like/${parseFloat(freeContentId)}`)
            .then(function (response) {
    
                console.log(response.data.cnt);
                setCommentLikeCnt(response.data.cnt);
                setLikeCheck(response.data.likeCheck);
            })  
            .catch(function (error) {
                console.log(error);
            }); 
        }else{
            axios.post(`/contents/like/${parseFloat(freeContentId)}`)
            .then(function (response) {
    
                console.log(response.data.cnt);
                setCommentLikeCnt(response.data.cnt);
                setLikeCheck(response.data.likeCheck);
                
            })  
            .catch(function (error) {
                console.log(error);
            }); 
        }
       
    }

    return (
        <View style={{borderTopWidth:1,borderTopColor:COLORS.darkgray}}>
            <View style={{marginTop:10}}></View>
            <View style={{display: 'flex',flexDirection: 'row'}}>
                <TouchableOpacity
                    onPress={() =>commentLike()}
                >
                    <View style={{display: 'flex',flexDirection: 'row',marginLeft:20}}>
                        
                        {likeCheck?<Icon size={20} name="heart"></Icon>:<Icon size={20} name="heart-outline"></Icon>}
                        <Text style={{marginLeft:10,fontSize:SIZES.base*2.7}}>{commentLikeCnt}</Text>
                    </View>
                </TouchableOpacity>
                <View style={{display: 'flex',flexDirection: 'row',marginLeft:20}}>
                    <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setModalOpen(true)}>
                        <Image
                                source={icons.comment}
                                resizeMode="cover"
                                style={{
                                    width: 18,
                                    height: 18
                                }}
                            />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalOpen(true)}>
                        <Text style={{marginLeft:10,fontSize:SIZES.base*2.7}}>{contentDetail.commentCnt}</Text>
                    </TouchableOpacity>
                </View>
            </View>
      </View>
    )
}

export default CommentBox
