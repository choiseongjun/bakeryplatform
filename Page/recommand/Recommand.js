import React,{useState,useEffect} from 'react';
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    SafeAreaView,
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import RequireLogin from '../../components/common/RequireLogin';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RecommandHeader from '../../components/common/RecommandHeader';

const hashtag = [
    {
        name:"#연남동"
    },
    {
        name:"#마카롱"
    },
    {
        name:"#케이크"
    },
    {
        name:"#케이크"
    },
]

const rdata = [
    {
        name:"love_bread",
        image: images.recommand1
    },
    {
        name:"love_bread",
        image: images.recommand2
    },
    {
        name:"love_bread",
        image: images.recommand3
    },
    {
        name:"love_bread",
        image: images.recommand4
    },
    {
        name:"love_bread",
        image: images.recommand5
    },
    {
        name:"love_bread",
        image: images.recommand6
    },
    {
        name:"love_bread",
        image: images.recommand7
    },
    {
        name:"love_bread",
        image: images.recommand8
    },
    {
        name:"love_bread",
        image: images.recommand9
    },
    {
        name:"love_bread",
        image: images.recommand10
    },
    {
        name:"love_bread",
        image: images.recommand11
    },
    {
        name:"love_bread",
        image: images.recommand12
    },
    {
        name:"love_bread",
        image: images.recommand13
    },
]
const Recommand = ({navigation}) => {

    const [modalOpen, setModalOpen] = useState(false);//로그인모달창 오픈여부
    const [recommandList,setRecommandList] = useState([]);

    useEffect(() => {

        axios.get('/contentList/blogList')
        .then(function (response) {
            // handle success

            setRecommandList(response.data)
            console.log('성공했습니다!');
          })
          .catch((err)=>{
            console.log(err.response)
          })
    },[])

    return (
        <SafeAreaView style={{backgroundColor:COLORS.white,flex:1}}>
            <RecommandHeader />
            <View>
                {/* <View style={{display: 'flex',flexDirection: 'row'}}>
                    <TouchableOpacity style={{width:65,height:35,backgroundColor:COLORS.lightGray3}}>
                        <Text style={{color:COLORS.black,fontFamily:'NotoSans-Black',marginTop:7,marginLeft:10}}>인기글</Text>
                    </TouchableOpacity>
                    {hashtag.map((item,index)=>(
                        index<3?
                        <TouchableOpacity style={{width:65,height:35,backgroundColor:COLORS.white,marginLeft:20,borderColor:COLORS.black,borderWidth:1}}>
                            <Text style={{color:COLORS.maingray,fontWeight: 'bold',marginTop:7,marginLeft:10}}>{item.name}</Text>
                        </TouchableOpacity>
                        :<Text></Text>
                    ))}
                    <TouchableOpacity style={{width:35,height:35,backgroundColor:COLORS.white,marginLeft:20,borderColor:COLORS.black,borderWidth:1}}>
                        <Text style={{marginLeft:13,marginTop:5,color:COLORS.maingray}}>+</Text>
                    </TouchableOpacity>
                </View> */}
                <Modal animationType="slide" visible={modalOpen} >
                {modalOpen&&<RequireLogin  navigation={navigation} setModalOpen={setModalOpen} />}
                </Modal> 
                {/*
                <View style={{paddingTop: 20, paddingBottom: 10, flexDirection:'row'}}>
                    <View style={{justifyContent:'flex-end', alignItems:'flex-end'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>다른 지역보기</Text>
                    </View>
                </View>
                */}
                <ScrollView>
                {/*
                <View style={{paddingBottom: 10, flexDirection:'row'}}>
                    <View style={{justifyContent:'flex-start', alignItems:'flex-start', flexDirection:'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20 }}>연남동</Text> 
                    </View>
                </View>
                <View style={{paddingBottom: 10, flexDirection:'row'}}>
                    <View style={{justifyContent:'flex-start', alignItems:'flex-start', flexDirection:'row'}}>
                        <Text style={{fontWeight: 'bold', fontSize: 20 }}>빵집이 400개가 있습니다</Text> 
                    </View>
                </View>
                */}
                <View style={{display: 'flex',flexDirection: 'row',flexWrap:'wrap',height:'auto',marginBottom:100}}>
                    {recommandList.map((item)=>(
                        <TouchableOpacity
                        style={{
                            marginTop: 10,
                            padding: 20
                        }}
                        activeOpacity={1}
                        onPress={() => {
                                AsyncStorage.getItem('accessToken').then((token)=>{
                                    if(token!==null){
                                        setModalOpen(true)
                                    }else{
                                        navigation.navigate('FreeContentDetail',{freeContentId:item.id, freeContentImage:images.content1})
                                    }
                                })
                            }}>
                            <View>
                                {item.url===null?
                                    <Image
                                    source={images.content1}
                                    resizeMode="cover"
                                    style={{
                                        width: SIZES.width/2.5,
                                        height: SIZES.width/2.5,
                                        color:COLORS.darkgray,
                                        borderRadius: 10
                                    }}
                                    />
                                    :
                                    <Image
                                        source={{uri:item.url}}
                                        resizeMode="cover"
                                        style={{
                                            width: SIZES.width/2.5,
                                            height: SIZES.width/2.5,
                                            color:COLORS.darkgray,
                                            borderRadius: 10
                                        }}
                                    />
                                }
                                <View style={{paddingTop:10, flexDirection:'column'}}>
                                    <View>
                                        <Text style={{fontSize:15, fontWeight:'bold'}}>연남동 케이커리</Text>
                                    </View>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{flexDirection:'row',marginRight:14}}>
                                            <Image source={icons.comment} style={{color: COLORS.darkgray, width:16,height:16}}/>
                                            <Text style={{fontSize:14, fontWeight:'400'}}>+99</Text>
                                        </View>
                                        <View style={{flexDirection:'row',marginRight:4}}>
                                            <Image source={icons.good} style={{color: COLORS.darkgray, width:16,height:16}}/>
                                            <Text style={{fontSize:14, fontWeight:'400'}}>+99</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Recommand;
