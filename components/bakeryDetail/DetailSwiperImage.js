import React,{useState,useEffect} from 'react';
import { Text, View, Image, Dimensions,TouchableOpacity,ImageBackground,TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';

const DetailSwiperImage = ({navigation,bakeryDetail}) => {

    console.log('bakeryDetail',bakeryDetail)
    return ( 
        <View style={styles.container}>
            <Swiper
            style={styles.wrapper}
            height={400}
            onMomentumScrollEnd={(e, state, context) =>
                console.log('index:', state.index)
            }
            dot={
                <View
                style={{
                    backgroundColor: '#f0f0f0',
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 3,
                    marginBottom: 3
                }}
                />
            }
            activeDot={
                <View
                style={{
                    backgroundColor: '#000',
                    width: 15,
                    height: 15,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 3,
                    marginBottom: 3
                }}
                />
            }
            paginationStyle={{
                bottom: -40,
                left: null,
                right: 130
            }}
            loop
            >
            <View
                style={styles.slide}               
            >
                <ImageBackground
                resizeMode="stretch"
                style={styles.image}
                source={require('./img/bakery1.jpeg')}
                >
                    <View style={styles.slideTextContainer}>
                            <TouchableOpacity
                                activeOpacity={1}
                                style={{left:20,bottom:230}}
                                onPress={() => navigation.goBack()}>
                                <Image 
                                    source={icons.back1} 
                                    style={{
                                        width:20,
                                        height:30
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{left:350,bottom:250}} onPress={()=>console.log('kkk')}> 
                                <Image
                                source={icons.share}
                                style={{
                                    width: 30,
                                    height: 30
                                }}
                                />
                            </TouchableOpacity>
                        <View style={{display: 'flex',flexDirection: 'row'}}>
                            <Text style={styles.slideText} numberOfLines={1}>{bakeryDetail.entrpNm}</Text>
                                <TouchableOpacity 
                                    style={styles.button}
                                    onPress = {()=>navigation.goBack()}
                                > 
                                    <Text style={{color:COLORS.white,fontSize:SIZES.font*1.1,fontWeight:'bold'}}>팔로우 +</Text>
                                </TouchableOpacity> 
                        </View>
                        <View style={{display:'flex',flexDirection: 'row',marginLeft:30,marginBottom:30}}>
                            <Text style={{color:COLORS.white,fontSize:SIZES.font*1.2}} numberOfLines={1}>팔로워129</Text>
                            <Text style={{marginLeft:30,color:COLORS.white,fontSize:SIZES.font*1.2}} numberOfLines={1}>리뷰5</Text>
                        </View>
                    </View>
                </ImageBackground>
                   
            </View>
            <View
                style={styles.slide}
                title={
                <Text numberOfLines={1}></Text>
                }
            >
                <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('./img/bakery2.jpeg')}
                />
            </View>
            <View
                style={styles.slide}
                title={<Text numberOfLines={1}></Text>}
            >
                <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('./img/3.jpg')}
                />
            </View>
            <View
                style={styles.slide}
                title={
                <Text numberOfLines={1}></Text>
                }
            >
                <Image
                resizeMode="stretch"
                style={styles.image}
                source={require('./img/4.jpg')}
                />
            </View>
            </Swiper>
        </View>
    )
}
const styles = {
    container: {
      height:400,
    },
    button: {
        alignItems: "center",
        borderWidth:2,
        borderColor:COLORS.white,
        padding: 5,
        width:80,
        height:50,
        right:-170,
        display:'flex',
    },
    wrapper: {
        position: 'absolute',
    },
    slideTextContainer:{
        top:250
    },
    slideText:{
     
        left:30,
        fontWeight: 'bold',
        fontSize:SIZES.font*2,
        color:COLORS.white
    },
    slide: {
      flex: 1,
      justifyContent: 'center',

    },
  
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
   
  
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
  
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
  
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    },
  
    image: {
      width,
      flex: 1
    }
}
  
export default DetailSwiperImage
