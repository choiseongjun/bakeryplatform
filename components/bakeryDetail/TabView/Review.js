import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Button } from "react-native";
import StarRating from 'react-native-star-rating-new';
import { icons, images, SIZES, COLORS, FONTS } from '../../../constants';
import axios from 'axios';
import {useDispatch,useSelector } from 'react-redux';

const Review = ({writeVisible,setWriteVisible,bakeryId}) => {
    const WATER_IMAGE = require('./image/icon.png')
    let menuData = [
        {"name":"@csj***","createDate":"2020.09.28","content":"맛있어요","star":4},
        {"name":"@cfj***","createDate":"2020.09.18","content":"서울 가면 꼭 들리는 빵집이에요!","star":5},
        {"name":"@ca***","createDate":"2020.09.23","content":"엄마가 좋아하세요ㅎㅎ","star":3},
        {"name":"@cj***","createDate":"2020.09.24","content":"좋아요^^","star":2},
    ]
    const [starCount,setStartCount] = useState(3);
    const [review,setReview] = useState([]);
    const { userInfo} = useSelector((state) => state.userReducer);
    const onStarRatingPress = (rating) =>{
        console.log(rating)
        setStartCount(rating)
    }

    useEffect(() => {
        axios.get(`/bakery/review/${bakeryId}`)
        .then(function (response) {
            // handle success
            console.log(response.data)
            setReview(response.data)
            console.log('성공했습니다!');
          })
          .catch((err)=>{
            console.log(err.response)
          })
    }, [])

    const onDeleteReview = (id) =>{
        console.log('id',id)
        axios.delete(`/bakery/review/${id}`)
        .then(function (response) {
            // handle success
            console.log(response.data)
            setReview(review.filter((item)=>item.id!==response.data))
          })
          .catch((err)=>{
            console.log(err.response)
          })
    }

    const renderReviewList = () =>{
        return(
            <>
            {/* <View style={{display: 'flex',flexDirection: 'row',left:20,marginTop:30}}>
                <Text style={{fontSize:SIZES.font*2,fontWeight: 'bold'}}>별점</Text>
                <View style={{width:100,marginTop:6,marginLeft:20}}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={starCount}
                        selectedStar={(rating) => onStarRatingPress(rating)}
                        starSize={25}
                    />
                
                </View>
                <Text style={{marginLeft:30,fontSize:SIZES.font*2}}>{starCount}</Text>
            </View> */}
            <View style={{marginTop:20}}>
            <TouchableOpacity
                style={styles.reviewWriteCommentBox}
                onPress={()=>setWriteVisible(true)}
            >
                <Text>글쓰기</Text>
            </TouchableOpacity>
            </View>
            {review.map((item)=>
                <View style={styles.reviewCommentBox}>
                    <View style={{width:100}}>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={item.star}
                            starSize={20}
                            fullStarColor={'red'}
                        />
                        
                    </View>
                    
                    <View style={{display: 'flex',flexDirection: 'row',marginTop:5}}>
                        <Text style={{fontSize:16,color:'#808080'}}>{item.nickname}</Text>
                        <Text style={{fontSize:16,marginLeft:15}}>{'|'}</Text>
                        <Text style={{fontSize:16,marginLeft:15,color:'#808080'}}>{item.create_date}</Text>
                        {item.userKey===userInfo.id && 
                            <TouchableOpacity onPress={()=>onDeleteReview(item.id)}>
                                <Text style={{marginLeft:40}}>삭제</Text>
                            </TouchableOpacity>
                        }
                        
                    </View>
                    <View style={{marginTop:15}}>
                        <Text style={{fontSize:18,fontWeight: 'bold'}}>{item.content}</Text>
                    </View>
                    
                </View>
            )}
            </>
        )
    }

   
    return (
        <View >
            {renderReviewList()}
        </View>
    )
}
const styles = StyleSheet.create({
    reviewCommentBox: {
        width:360,
        height:100,
        marginTop:30,
        left:20,
        borderBottomWidth:1,
        borderColor:COLORS.darkgray
    },
    reviewWriteCommentBox:{
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        padding: 10,
        height:50,
        width:'50%',
        left:'25%'
    }
  });
export default Review
