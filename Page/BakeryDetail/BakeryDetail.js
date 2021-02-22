import React,{useState,useEffect} from 'react';
import DetailSwiperImage from '../../components/bakeryDetail/DetailSwiperImage';
import HashTag from '../../components/bakeryDetail/HashTag';
import DetailTabView from '../../components/bakeryDetail/DetailTabView';
import {View,ScrollView,Text,StyleSheet,TouchableOpacity,Image,Alert} from 'react-native';
import WriteHeader from '../../components/common/WriteHeader';
import StarRating from 'react-native-star-rating-new';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import Textarea from 'react-native-textarea';
import * as ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BakeryDetail = ({navigation,route}) => {

    const [writeVisible,setWriteVisible] = useState(false);    
    const [reviewText,setReviewText] = useState('');
    const [img, setImageSource ] = useState("");  // 이미지를 img변수에 할당시킬겁니다!
    const [bakeryDetail,setBakeryDetail] = useState('');

    //리뷰 스테이트
    const [content,setContent] = useState('');//컨텐츠
    const [star,setStar] = useState(0);
    
   
    const pickImg = ()=>{
        // ImagePicker.showImagePicker(options, (response) => {
        //     console.log('Response = ', response);
        
        //     if (response.didCancel) {
        //       console.log('User cancelled image picker');
        //     } else if (response.error) {
        //       console.log('ImagePicker Error: ', response.error);
        //     } else if (response.customButton) {
        //       console.log('User tapped custom button: ', response.customButton);
        //     } else {
        //       // You can also display the image using data:
        //       // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        //       setImageSource(response.uri); // 저는 여기서 uri 값을 저장 시킵니다 !
        //     }
        //   });
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
                setImageSource(response.uri);
              console.log(response);
              // let ImageFile ={
              //   uri:response.uri
              // }
              // console.log('sdfdf')
              
            },
        )
        }  
    useEffect(() => {
        
        axios.get(`/bakery/${route.params.bakeryId}`)
        .then(function (response) {
            setBakeryDetail(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, [])
    const onStarRatingPress = (rating) =>{
        setStar(rating)
    }
    const onChangeText = (item)=>{
        console.log(item)
    }
    const reviewSubmit = () =>{

        if(star===0)
            return Alert.alert('별점을 입력해주세요.');
        if(content==='')
            return Alert.alert('내용을 입력해주세요.');
        AsyncStorage.getItem('accessToken').then((token)=>{
            console.log('token!#@',token)
            if(token===null){
                return Alert.alert('로그인을 해주세요.');
            }else{
                axios.post(`/bakery/review/${route.params.bakeryId}`,{star:star,content:content})
                .then(function (response) {
                    console.log(response.data)
                    setWriteVisible(false)
                  // handle success
                  console.log('성공했습니다!');
                })
                .catch((err)=>{
                  console.log(err.response)
                })
                .finally(()=>{
                    setContent('')
                    setStar(0)
                })
            }
        })
        


    }
   
    const renderReviewWrite = () =>{

        return(
            <View style={{height:800}}>
                <WriteHeader setWriteVisible={setWriteVisible} reviewSubmit={reviewSubmit} />
                <View style={{display: 'flex',justifyContent: 'center',alignItems: 'center',marginTop:30}}>
                    <View style={{width:100,marginRight:50}}>
                        <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={star}
                                selectedStar={(rating) => onStarRatingPress(rating)}
                                starSize={35}
                            />
                    </View> 
                    <Text style={{marginTop:15,fontSize:SIZES.font*1.2}}>별점을 눌러주세요</Text>
                    <View style={{width:"80%",borderBottomWidth:1,borderColor:COLORS.darkgray,marginTop:30}}></View>
                    
                    <View style={{width:'85%'}}> 
                        <Textarea
                                containerStyle={styles.textareaContainer}
                                style={styles.textarea}
                                onChangeText={(item)=>setContent(item)}
                                defaultValue={reviewText}
                                placeholder={'베이커리에 대한 후기를 남겨주세요:)'}
                                placeholderTextColor={'#c7c7c7'}
                                underlineColorAndroid={'transparent'}
                                value={content}
                            />
                    </View>
                </View>
                <View style={{left:30}}>
                    <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                        <Image source={icons.camera}  style={{width:70,height:70}}/>
                        
                    </TouchableOpacity>  
                    <Image source={{uri: img}} style={{width:100,height:100}}/>
                </View>
               
                
            </View>
        )
    }
    return (
        <ScrollView>
            <View style={{backgroundColor:'white',height:'auto'}}>
                {writeVisible?
                    renderReviewWrite()
                :
                <>
                <DetailSwiperImage 
                    navigation={navigation} 
                    bakeryDetail={bakeryDetail}
                />
                <View style={{marginTop:70,left:30}}>
                    <HashTag />
                </View>
                <DetailTabView 
                    writeVisible={writeVisible}
                    setWriteVisible={setWriteVisible}
                    bakeryId={route.params.bakeryId}
                    bakeryDetail={bakeryDetail}
                /> 
                </>
                }
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textareaContainer: {
      height: 300,
      padding: 5,
      backgroundColor: COLORS.white,
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 300,
      fontSize: 24,
      color: '#333',
    },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
  });
export default BakeryDetail
