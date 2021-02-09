import React,{useState,useEffect} from 'react';
import DetailSwiperImage from '../../components/bakeryDetail/DetailSwiperImage';
import HashTag from '../../components/bakeryDetail/HashTag';
import DetailTabView from '../../components/bakeryDetail/DetailTabView';
import {View,ScrollView,Text} from 'react-native';


const BakeryDetail = ({navigation,route}) => {

    useEffect(() => {
        
        console.log('route',route.params.bakeryId)
    }, [])
    // const renderPagination = (index, total, context) => {
    //     return (
    //       <View style={styles.paginationStyle}>
    //         <Text style={{ color: 'grey' }}>
    //           <Text style={styles.paginationText}>{index + 1}</Text>/{total}
    //         </Text>
    //       </View>
    //     )
    //   }
    return (
        <ScrollView>
        <View style={{backgroundColor:'white',height:1000}}>
            
            <DetailSwiperImage />
            <View style={{marginTop:70,left:30}}>

                <HashTag />
            </View>
            <DetailTabView /> 
       
            
        </View>
        </ScrollView>
    )
}

export default BakeryDetail
