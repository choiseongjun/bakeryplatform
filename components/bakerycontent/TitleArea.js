import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    ImageBackground
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';

const TitleArea = ({bakeryData}) => {
    return (
        <ImageBackground
                source={images.breaddata1}
                resizeMode="stretch"
                style={{
                    width: '100%', 
                    height: 500, 
                }}
            >
                <View style={{marginTop:300,marginLeft:50}}>
                    <Text style={styles.title}>{bakeryData.title}</Text>
                    <View style={{display: 'flex',flexDirection: 'row',marginTop:20}}>
                        <Image
                            source={bakeryData.profile_image}
                            resizeMode="contain"
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius:6,
                                color:COLORS.darkgray
                            }}
                        />
                        <View>
                            <View style={{marginLeft:15}}>
                                <View style={{display: 'flex',flexDirection: 'row'}}>
                                    <Text style={styles.writer}>{bakeryData.writer}</Text>
                                    <TouchableOpacity 
                                        style={styles.button}
                                        onPress = {()=>console.log('follow')}
                                    > 
                                        <Text style={{color:COLORS.white,fontSize:SIZES.font*1.1,fontWeight:'bold'}}>팔로우 +</Text>
                                    </TouchableOpacity> 
                                </View>
                                <Text style={[styles.writer,{marginTop:-20}]}>{bakeryData.create_data}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ImageBackground>
    )
}
const styles = StyleSheet.create({

    title:{
        fontSize:SIZES.base*4,
        color:COLORS.white,
        fontFamily:'NotoSans-Black'
    },
    writer:{
        fontSize:SIZES.base*2.5,
        color:COLORS.white
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
})
export default TitleArea
