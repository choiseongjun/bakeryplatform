import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { icons, SIZES, COLORS,images } from '../../constants';
const bakeryContentData = [
    {
        "key": 1,
        "title": "서초역 근처 예븐카페 추천해드릴게요!",
        "writer":"skosi_7605",
        "like_cnt":24,
        "comment_cnt":10,
        "image": require("../../assets/images/freecontent1.png")
       
    },
    {
        "key": 2,
        "title": "강남 파미에스테이션 베이커리 맛집 아시는분?",
        "writer":"hok_00000",
        "like_cnt":9,
        "comment_cnt":59,
        "image": require("../../assets/images/freecontent2.png")
    },
    {
        "key": 3,
        "title": "당신의 취향을 공유해주세요!",
        "writer":"sss_976_ik",
        "like_cnt":0,
        "comment_cnt":8,
        "image": require("../../assets/images/freecontent3.png")
    },
    {
        "key": 4,
        "title": "빵집 보통 언제 가시나요?",
        "writer":"hyungdue",
        "like_cnt":3,
        "comment_cnt":80,
        "image": require("../../assets/images/freecontent3.png")
    },
]

const FreeContents = () => {
    const renderItem = ({ item }) => (
        <View style={{display: 'flex',flexDirection: 'row',width:'50%',marginTop:20}}>
            <Image
                source={item.image}
                resizeMode="cover"
                style={{
                    width: 150,
                    height: 150,
                }}
            />
            <View style={{marginLeft:15}}>
                <Text style={styles.contentInnerTitle}>{item.title}</Text>
                <Text style={{marginTop:10,fontSize:SIZES.base*2.4,color:COLORS.maingray}}>{item.writer}</Text>
            </View>
        </View>
      );

    return (
        <View style={styles.container}>
            <Text style={styles.contentTitle}>자유로운 컨텐츠</Text>
            <View style={styles.bakeryContent}>
                <FlatList
                    data={bakeryContentData}
                    renderItem={renderItem}
                    keyExtractor={item => item.key}
                />
            </View>
            <View style={{marginTop:20,borderBottomWidth:2,borderColor:COLORS.darkgray,width:'80%'}}>

            </View>
            <View style={{marginTop:30,display: 'flex',justifyContent: 'center',alignItems: 'center',left:-30}}>
                <Text style={{fontSize:SIZES.base*2.6,fontWeight: 'bold'}}>더보기</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       marginTop:30,
       left:30
    },
    contentTitle:{
        fontSize:SIZES.base*3,
        fontWeight:'bold'
    },
    bakeryContent:{
        marginTop:30
    },
    contentInnerTitle:{
        fontSize:SIZES.base*2.4,
        fontWeight:'bold'
    }
})
export default FreeContents;
