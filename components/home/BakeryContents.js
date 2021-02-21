import React,{useEffect,useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import { icons, SIZES, COLORS,images } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

// const bakeryContentData = [
//     {
//         "key": 1,
//         "title": "베이커리와 만나다.광화문역,아띠베이커리",
//         "writer":"skosi_7605",
//         "like_cnt":24,
//         "comment_cnt":10,
//         "image": require("../../assets/images/breadcontent1.png")
       
//     },
//     {
//         "key": 2,
//         "title": "당신은 어떤 디지터를 좋아하시나요?디저트 추천..디저트 추천..",
//         "writer":"hok_00000",
//         "like_cnt":9,
//         "comment_cnt":59,
//         "image": require("../../assets/images/breadcontent2.png")
//     },
//     {
//         "key": 3,
//         "title": "경복궁역 근처,아늑한 한옥카페",
//         "writer":"sss_976_ik",
//         "like_cnt":0,
//         "comment_cnt":8,
//         "image": require("../../assets/images/breadcontent3.png")
//     },
//     {
//         "key": 4,
//         "title": "인스타감성,저의 취향저격 카페 추천해드..",
//         "writer":"hyungdue",
//         "like_cnt":3,
//         "comment_cnt":80,
//         "image": require("../../assets/images/breadcontent3.png")
//     },
// ]
const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
const BakeryContents = ({navigation,modalOpen,setModalOpen}) => {

    const [bakeryContentData,setBakeryContentData] = useState([]);

    useFocusEffect(
        React.useCallback( () => {
            axios.get('/contentList/1')
            .then(function (response) {
    
                setBakeryContentData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
          
        }, [])
      ); 

    const renderItem = ({ item }) => (
        <TouchableOpacity
        activeOpacity={1}
        onPress={() =>{
            AsyncStorage.getItem('accessToken').then((token)=>{
                if(token===null){
                    setModalOpen(true)
                }else{
                    navigation.navigate('BakeryContent',{bakeryId:item.id})
                }
            })
          
        }}
        >
        <View style={{display: 'flex',flexDirection: 'row',width:'50%',marginTop:20}}>
            {item.url===null?
            <Image
                source={images.content1} 
                resizeMode="cover"
                style={{
                    width: 150,
                    height: 150,
                }}
            />
            :
            <Image
                source={{uri:item.url}}
                resizeMode="cover"
                style={{
                    width: 150,
                    height: 150,
                }}
            />
            }
            
            <View style={{marginLeft:15}}>
                <Text style={styles.contentInnerTitle}>{item.title}</Text>
                <Text style={{marginTop:10,fontSize:SIZES.base*2.4,color:COLORS.maingray}}>{item.writer}</Text>
            </View>
        </View>
        </TouchableOpacity>
      );

    return (
        <View style={styles.container}>
            <Text style={styles.contentTitle}>베이커리 컨텐츠</Text>
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
export default BakeryContents;
