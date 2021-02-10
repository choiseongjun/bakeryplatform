import React from 'react'
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
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';


const DetailTitle = ({detailData,prevnextData}) => {
    return (
        <View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{detailData.title}</Text>
            </View>
            <View style={{marginTop:15,display: 'flex',flexDirection: 'row'}}>
                <Text style={{fontSize:SIZES.base*2.1}}>{detailData.writer}</Text>
                <Text style={{marginLeft:15}}>|</Text>
                <Text style={{marginLeft:15,fontSize:SIZES.base*2.1}}>{detailData.create_date}</Text>
            </View>
            <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.maingray}}></View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentText}>{detailData.content}</Text>
            </View>
            <View>
                <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.maingray}}></View>
                <View style={{marginTop:20}}>
                    <View>
                        <View style={{display: 'flex',flexDirection: 'row'}}>
                            <Text>이전</Text>
                            <Text style={{marginLeft:15}}>{prevnextData.prevData}</Text>
                        </View>
                        <View style={{width:'90%',marginTop:20,borderBottomWidth:1,borderBottomColor:COLORS.darkgray}}></View>
                        <View style={{display: 'flex',flexDirection: 'row',marginTop:15}}>
                            <Text>다음</Text>
                            <Text style={{marginLeft:15}}>{prevnextData.nextData}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    titleContainer:{
        width:280,
        display: 'flex',
        flexDirection: 'row',
        flexWrap:'wrap',
    },
    titleText:{
        fontFamily:'NotoSans-Black',
        fontSize:SIZES.base*3.4
    },
    contentContainer:{
        marginTop:50,
        flexDirection: 'row',
        display: 'flex',
        width:350,
        flexWrap:'wrap'
    },
    contentText:{
        fontSize:SIZES.base*3
    },
})
export default DetailTitle
