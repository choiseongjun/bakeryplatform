import React,{useState,useEffect} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal,
    TextInput,
    SafeAreaView
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import axios from 'axios';
import FreeContentDetailHeader from '../../components/common/FreeContentDetailHeader';
import DetailTitle from '../../components/freecontent/DetailTitle';
import CommentBox from '../../components/freecontent/CommentBox';
import CommentList from '../../components/freecontent/CommentList';
import CommentWrite from '../../components/freecontent/CommentWrite';



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

const FreeContentDetail = ({navigation,route}) => {

    const [modalOpen, setModalOpen] = useState(false);
    const [contentDetail,setContentDetail] = useState([]);
    const [contentPrevNext,setContentPrevNext] = useState([]);
    const [commentList,setCommentList] = useState([]);

    useEffect(() => {
        axios.get(`/contentDetail/${route.params.freeContentId}`)
        .then(function (response) {
            console.log('detail',response.data)
            setContentDetail(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get(`/contentDetailNextPrev/${route.params.freeContentId}`)
        .then(function (response) {
            setContentPrevNext(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        axios.get(`/contents/reply/${route.params.freeContentId}`)
        .then(function (response) {
            console.log('commentlist',response.data)
            setCommentList(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])

    return (
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <Modal transparent={true} visible={modalOpen} style={{width:500}} animationType='slide'>
                <CommentList setModalOpen={setModalOpen} commentList={commentList} setCommentList={setCommentList}/>
                <View >
                    <CommentWrite navigation={navigation} setModalOpen={setModalOpen} freeContentId={route.params.freeContentId} commentList={commentList} setCommentList={setCommentList} /> 
                </View>
            </Modal>
            <ScrollView style={{height:800}}>
                <FreeContentDetailHeader navigation={navigation} />
                <View>
                    <View style={{marginTop:0,marginLeft:20}}>
                        <DetailTitle titleImage={route.params.freeContentImage} detailData={contentDetail} contentDetail={contentDetail} prevnextData={contentPrevNext} navigation={navigation} />                   
                    </View>
                </View>
            </ScrollView>
            {/* <View style={{width: SIZES.width, flexDirection:'row'}}>
                <View style={{position:'absolute', right: 50, bottom: 20}}>   
                    <FlyingBread />
                </View>
            </View> */}
            <View style={{height:40,marginBottom:0}}>
                <CommentBox setModalOpen={setModalOpen} freeContentId={route.params.freeContentId} contentDetail={contentDetail} />
            </View>
        </SafeAreaView>
    )
}

export default FreeContentDetail
