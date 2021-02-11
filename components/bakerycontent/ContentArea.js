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
    ImageBackground,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';
import ContentSwiper from './ContentSwiper';
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';


const { width } = Dimensions.get('window');
const ContentArea = ({bakeryData}) => {
    return (
        <View > 
            <View style={styles.gotobakeryContainer}>
                <Text style={styles.gotobakery}>해당 베이커리 바로가기</Text>
            </View>
            <View style={styles.underline} />
            <View style={{marginTop:50,marginLeft:20,width:'90%',flex:1}}>
                <Text style={styles.mainContent}>{bakeryData.maincontent}</Text>
                 <View style={{marginTop:30}} >
                    <ContentSwiper bakeryData={bakeryData} />
                 </View>
                 <View style={{marginTop:80}}>
                     <Text style={{fontSize:SIZES.base*2.5}}>{bakeryData.subcontent}</Text>
                 </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    gotobakeryContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        left:30,
        height: 70,
    },
    gotobakery:{
        fontSize:SIZES.base*2.4,
        fontFamily:'NotoSans-Black'
    },
    underline:{
        width:'100%',
        borderBottomWidth:2,
        borderBottomColor:COLORS.darkgray
    },
    slide: {
        justifyContent: 'center',
        backgroundColor: 'transparent',
        marginTop:150
      },
    mainContent:{
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*3.4
    },
    image: {
        width:400,
        height:500
      },
    wrapper:{
        position: 'absolute',
    }
})
export default ContentArea
