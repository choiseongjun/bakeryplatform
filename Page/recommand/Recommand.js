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
const Recommand = () => {
    return (
        <View style={{backgroundColor:COLORS.white,height:'auto'}}>
            <RecommandHeader />
            
            <View style={{marginTop:30,marginLeft:20}}>
                
                <View style={{display: 'flex',flexDirection: 'row'}}>
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
                </View>
                <ScrollView>
                <View style={{display: 'flex',flexDirection: 'row',flexWrap:'wrap',width:400}}>
                    {rdata.map((item)=>(
                        <View style={{marginLeft:10}}>
                            <Image
                            source={item.image}
                            resizeMode="cover"
                            style={{
                                width: 180,
                                height: 150,
                                color:COLORS.darkgray,
                                top:20
                            }}
                        />
                            <View style={{marginTop:30}}>
                                <Text>{item.name}</Text>
                            </View>
                        </View>
                    ))}
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default Recommand;
