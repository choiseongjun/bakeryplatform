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
import FreeContentDetailHeader from '../../components/common/FreeContentDetailHeader';
import DetailTitle from '../../components/freecontent/DetailTitle';
import CommentBox from '../../components/freecontent/CommentBox';

const detailData = {
    "title":"강남 파미에스테이션 베이커리 맛집 아시느분?",
    "writer":"hok_00000",
    "create_date":"2021.01.22 17:46",
    "content":"강남 고속버스터미널 갈 일이 있는데,거기 파미에스테이션이 크기로 유명하잖아요! 혹시 어디 빵집이 가장 맛있을까요?!강남 고속버스터미널 갈 일이 있는데,거기 파미에스테이션이 크기로 유명하잖아요! 혹시 어디 빵집이 가장 맛있을까요?!강남 고속버스터미널 갈 일이 있는데,거기 파미에스테이션이 크기로 유명하잖아요! 혹시 어디 빵집이 가장 맛있을까요?!강남 고속버스터미널 갈 일이 있는데,거기 파미에스테이션이 크기로 유명하잖아요! 혹시 어디 빵집이 가장 맛있을까요?!강남 고속버스터미널 갈 일이 있는데,거기 파미에스테이션이 크기로 유명하잖아요! 혹시 어디 빵집이 가장 맛있을까요?!"
}
const prevnextData = {
    "prevData":"우리동네만 왜그런지는 몰라도 베이커리...",
    "nextData":"여기 집 마카롱 개 맛없네요."
}

const FreeContentDetail = () => {
    return (
        <View style={{flex:1,backgroundColor:COLORS.white}}>
            
            <ScrollView style={{height:600}}>
            <FreeContentDetailHeader />
            <View style={{flex:1}} >
                <View style={{marginTop:30,marginLeft:20}}>
                    <DetailTitle detailData={detailData} prevnextData={prevnextData} />                   
                </View>
            </View>
            </ScrollView>
            <View style={{flex:1,height:100,backgroundColor:'red'}}>
                <CommentBox  />
            </View>
        </View>
    )
}

export default FreeContentDetail
