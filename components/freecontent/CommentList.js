import React from 'react';
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


const commentList = [
    {
        "key": 1,
        "content": "신세계 지하매장에 맛있는게 많더라구요~",
        "writer":"skosi_7605",
        "like_cnt":24,
        "comment_cnt":10,
        "image": require("../../assets/images/avatar-1.jpg"),
        "create_date":"2021.01.22 12:05"
       
    },
    {
        "key": 2,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-2.jpg"),
        "create_date":"2021.02.22 12:05"
    },
    {
        "key": 3,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-3.jpg"),
        "create_date":"2021.03.22 12:05"
    },
    {
        "key": 4,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-3.jpg"),
        "create_date":"2021.03.22 12:05"
    },
    {
        "key": 5,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-3.jpg"),
        "create_date":"2021.03.22 12:05"
    },
    {
        "key": 6,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-3.jpg"),
        "create_date":"2021.03.22 12:05"
    }, 
    {
        "key": 3,
        "content": "빵셔틀을 이곳으로",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/avatar-3.jpg"),
        "create_date":"2021.03.22 12:05"
    }, 

    
]

const CommentList = ({setModalOpen}) => {
    return (
        <ScrollView directionalLockEnabled={true}  
        >
            <View style={{ 
                flex: 1, 
                backgroundColor:'rgba(0,0,0,0.5)',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'}} 
                >
                    
                    <View style={{backgroundColor:'white',width:500,marginTop:200,height:'auto'}}>
                        <View style={styles.container}>
                            <View style={{display: 'flex',flexDirection: 'row'}}>
                                <Text style={{fontSize:SIZES.base*3.4,fontFamily:'NotoSans-Black'}}>댓글 </Text>
                                <TouchableOpacity onPress={()=>setModalOpen(false)}>
                                    <Text style={{fontSize:SIZES.base*3.4,fontFamily:'NotoSans-Black',marginLeft:220}}>닫기</Text>
                                </TouchableOpacity> 
                            </View>
                            {commentList.map((item)=>(
                                <View style={{marginTop:30}}>
                                <View style={{display: 'flex',flexDirection: 'row'}}>
                                    <Image
                                        source={item.image}
                                        resizeMode="contain"
                                        style={{
                                            width: 60,
                                            height: 60,
                                            borderRadius:6,
                                            color:COLORS.darkgray
                                        }}
                                    />
                                    <View style={{display: 'flex',flexDirection: 'row',left:20}}>
                                        <Text style={{fontFamily:'NotoSans-Black'}}>{item.writer}</Text>
                                        <View style={{display: 'flex',flexDirection: 'row',marginLeft:100}}>
                                            <Text>수정</Text>
                                            <Text style={{marginLeft:15}}>|</Text>
                                            <Text style={{marginLeft:15}}>삭제</Text>
                                        </View>
                                    </View>
                                    <View style={{marginTop:30,position:'absolute',left:80}}>
                                        <View style={{display: 'flex',flexDirection: 'row',flexWrap: 'wrap',width:270}}>
                                            <Text style={{fontSize:SIZES.base*2}}>{item.content}</Text>
                                        </View>
                                    </View>
                                    <View style={{marginTop:80,position:'absolute',left:80}}>
                                        <Text>{item.create_date}</Text>
                                    </View>
                                
                                    
                                </View>
                                <View style={{borderBottomColor: COLORS.maingray,borderBottomWidth:1,marginTop:50,width:'80%'}} />
                            </View>
                            ))}
                            

                        </View>
                    </View>

            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:40,
        marginLeft:80
    },
})
export default CommentList
