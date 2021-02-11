import React,{useState,useEffect} from 'react';
import { Text, View, Image, Dimensions,TouchableOpacity,ImageBackground,TouchableHighlight } from 'react-native';
import Swiper from 'react-native-swiper';
const { width } = Dimensions.get('window');
import { icons, images, SIZES, COLORS, FONTS } from '../../constants';

const ContentSwiper = ({bakeryData}) => {
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
                {bakeryData.content_img.map((item)=>(
                    <View
                         style={styles.slide}               
                    >
                        <Image
                        resizeMode="stretch"
                        style={styles.image}
                        source={item.image}
                        />
                    </View>
                ))}
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
        marginLeft:70,
        display:'flex',
        justifyContent: 'center'
    },
    wrapper: {
        position: 'absolute',
    },
    slideTextContainer:{
        top:300
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
  
export default ContentSwiper
