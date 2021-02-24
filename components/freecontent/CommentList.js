import React,{useState} from 'react';
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
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import axios from 'axios';

// const commentList = [
//     {
//         "key": 1,
//         "content": "신세계 지하매장에 맛있는게 많더라구요~1",
//         "writer":"skosi_7605",
//         "like_cnt":24,
//         "comment_cnt":10,
//         "image": require("../../assets/images/avatar-1.jpg"),
//         "create_date":"2021.01.22 12:05"
       
//     },
//     {
//         "key": 2,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-2.jpg"),
//         "create_date":"2021.02.22 12:05"
//     },
//     {
//         "key": 3,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-3.jpg"),
//         "create_date":"2021.03.22 12:05"
//     },
//     {
//         "key": 4,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-3.jpg"),
//         "create_date":"2021.03.22 12:05"
//     },
//     {
//         "key": 5,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-3.jpg"),
//         "create_date":"2021.03.22 12:05"
//     },
//     {
//         "key": 6,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-3.jpg"),
//         "create_date":"2021.03.22 12:05"
//     }, 
//     {
//         "key": 3,
//         "content": "빵셔틀을 이곳으로",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/avatar-3.jpg"),
//         "create_date":"2021.03.22 12:05"
//     }, 

    
// ]

const CommentList = ({setModalOpen,commentList,setCommentList}) => {

    const [updateVisible,setUpdateVisible]= useState(false);
    const [updateComment,setUpdateComment] = useState('');
    const [commentIdx,setCommentIdx] = useState(0);

    const deleteComment = (id) =>{
        console.log('id',id)
        axios.delete(`/contents/reply/${id}`)
        .then(function (response) {
            // handle success

            setCommentList(commentList.filter((item)=>item.id!==response.data))
          })
          .catch((err)=>{
            console.log(err.response)
          })
    }
    const updateVisibleAction = (id,content,idx) =>{
        
        setCommentIdx(idx);
        setUpdateComment(content)
        
        

        axios.patch(`/contents/reply/${id}`,{content:updateComment})
        .then(function (response) {
            commentList.find((item)=>item.id===id).content = updateComment;    
            setUpdateVisible(!updateVisible);
        })
        .catch((err)=>{
            console.log(err.response)
            setUpdateVisible(!updateVisible);
        })

        
    }
    return (
        
            <View style={{ 
                flex: 1, 
                backgroundColor:'rgba(0,0,0,0.5)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
                }} 
                >
                    
                    <View style={{backgroundColor:'white',width:500,marginTop:200,height:500}}>
                        <View style={styles.container}>
                            <View style={{display: 'flex',flexDirection: 'row'}}>
                                <Text style={{fontSize:SIZES.base*3.4,fontFamily:'NotoSans-Black'}}>댓글 </Text>
                                <TouchableOpacity onPress={()=>setModalOpen(false)}>
                                    <Text style={{fontSize:SIZES.base*3.4,fontFamily:'NotoSans-Black',marginLeft:220}}>닫기</Text>
                                </TouchableOpacity> 
                            </View>
                            <ScrollView>
                            {commentList.map((item,idx)=>(
                                
                                <View style={{marginTop:20}} key={idx}>
                                    
                                    <View>
                                        {/* <Image
                                            source={item.image}
                                            resizeMode="contain"
                                            style={{
                                                width: 60,
                                                height: 60,
                                                borderRadius:6,
                                                color:COLORS.darkgray
                                            }}
                                        /> */}
                                        <View style={{display: 'flex',flexDirection: 'row',left:20}}>
                                            <Text style={{fontFamily:'NotoSans-Black'}}>{item.nickname}</Text>
                                            
                                            <View style={{display: 'flex',flexDirection: 'row',marginLeft:100}}>
                                                <TouchableOpacity
                                                    onPress={()=>updateVisibleAction(item.id,item.content,idx)}
                                                >
                                                    <Text>수정</Text>
                                                </TouchableOpacity>
                                                <Text style={{marginLeft:15}}>|</Text>
                                                {updateVisible?
                                                <TouchableOpacity
                                                onPress={()=>setUpdateVisible(false)}
                                                >
                                                    <Text style={{marginLeft:15}}>취소</Text>
                                                </TouchableOpacity>
                                                :<TouchableOpacity
                                                onPress={()=>deleteComment(item.id)}
                                            >
                                                <Text style={{marginLeft:15}}>삭제</Text>
                                            </TouchableOpacity>}
                                                
                                            </View>
                                            
                                        </View>
                                        <View style={{marginLeft:20}}>
                                            <Text>{item.create_date}</Text>
                                        </View>
                                        <View style={{marginTop:30,marginLeft:20}}>
                                            <View style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',width:270}}>
                                                {idx===commentIdx&&updateVisible?
                                                <TextInput
                                                    style={styles.inputbox}
                                                    onChangeText={text => setUpdateComment(text)}
                                                    value={updateComment===''?item.content:updateComment}
                                                />
                                                :<Text style={{fontSize:SIZES.base*2}}>{item.content}</Text>
                                                }
                                            </View>
                                        </View>
                                       
                                    
                                        
                                    </View>
                                    <View style={{borderBottomColor: COLORS.black,borderBottomWidth:1,marginTop:10,width:'80%',opacity:0.5}} />
                                    
                                </View>
                            ))}
                            </ScrollView>

                        </View>
                    </View>

            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:80,
        height:'auto'
    },
    inputbox:{
        fontSize:19,
        width:'80%', 
        borderBottomColor: 'gray', 
        borderBottomWidth: 1,

    },
})
export default CommentList
