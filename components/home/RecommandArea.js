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

const RecommandArea = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>12월 가장 많이 조회된</Text>
            <Text style={[styles.title,{marginTop:10}]}>베이커리 추천</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
       marginTop:30,
       left:30
    },
    title:{
        fontSize:SIZES.base*2.8,
        fontWeight:'bold'
    }
})
export default RecommandArea
