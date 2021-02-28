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
    const [bakeryDetail,setBakeryDetail] = useState('');

    //리뷰 스테이트
    const [content,setContent] = useState('');//컨텐츠
    const [star,setStar] = useState(0);
    
    const [imageId,setImageId] = useState([]);
    const [imgSource, setImageSource ] = useState([]);  // 이미지를 img변수에 할당시킬겁니다!
    const pickImg = ()=>{
      
        // ImagePicker.launchImageLibrary(
        //     {
        //       mediaType: 'photo',
        //       includeBase64: false,
        //       maxHeight: 200,
        //       maxWidth: 200,
        //     },
        //     (response) => {
        //         setImageSource(response.uri);
        //       console.log(response);
        //       // let ImageFile ={
        //       //   uri:response.uri
        //       // }
        //       // console.log('sdfdf')
              
        //     },
        // )
        ImagePicker.launchImageLibrary(
            {
              mediaType: 'photo',
              includeBase64: false,
              maxHeight: 200,
              maxWidth: 200,
            },
            (response) => {
                
              console.log(response);
              // let ImageFile ={
              //   uri:response.uri
              // }
              // console.log('sdfdf')
              const data = new FormData();
              data.append('photo', {
                  uri: response.uri,
                  name: 'file_photo',
                  type: response.type,
              });

              axios.post('/common/content/photo',data)
                .then(function (response) {
                    // setImageSource(img.concat(response.data.url));
                    // setImageId(imageId.concat(response.data.id));
                    setImageSource(imgSource.concat(response.data.url));
                    setImageId(imageId.concat(response.data.id));
                    console.log(response.data)
                })
                .catch(function (error) {
                console.log(error);
                });
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
            if(token===null){
                return Alert.alert('로그인을 해주세요.');
            }else{

                console.log('imgid',imageId)
                axios.post(`/bakery/review/${route.params.bakeryId}`,{star:star,content:content,imgId:imageId})
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
                    setImageSource([]);
                    setImageId([]);
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
                <View style={{left:30,marginTop:30}}>
                    <TouchableOpacity style={styles.imgWrapper} onPress={()=>pickImg()}>
                        <Image source={icons.camera}  style={{width:70,height:70}}/>
                    </TouchableOpacity>  
                    <View style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
                    {imgSource.map((item)=>(
                        
                            <Image source={{uri: item}} style={{width:100,height:100}}/>
                        
                    ))}
                    </View>
                    {/* <Image source={{uri: imgSource}} style={{width:100,height:100}}/> */}
                </View>
                <View style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                    
                    <View style={{width:100,marginRight:50}}>
                        <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={star}
                                selectedStar={(rating) => onStarRatingPress(rating)}
                                starSize={35}
                                fullStarColor={'red'}
                            />
                    </View> 
                    {/* <Text style={{marginTop:15,fontSize:SIZES.font*1.2}}>별점을 눌러주세요</Text> */}
                    {/* <View style={{width:"80%",borderBottomWidth:1,borderColor:COLORS.darkgray,marginTop:30}}></View> */}
                    
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
                {/* <DetailSwiperImage 
                    navigation={navigation} 
                    bakeryDetail={bakeryDetail}
                /> */}
                <Text>{bakeryDetail.entrpNm}</Text>
                <Text>리뷰 5</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress = {()=>navigation.navigate('ContentWrite',{bakeryId:route.params.bakeryId})}
                >
                    <Text>후기 쓰기</Text>
                </TouchableOpacity>
                {/* <View style={{marginTop:70,left:30}}>
                    <HashTag />
                </View> */}
                <DetailTabView 
                    navigation={navigation}
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
        padding: 10,
        width:'50%',
        justifyContent: 'center',
        left:'25%'
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
