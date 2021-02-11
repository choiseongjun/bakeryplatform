import React,{useState} from 'react'
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
import TitleArea from '../../components/bakerycontent/TitleArea';
import ContentArea from '../../components/bakerycontent/ContentArea';
import CommentBox from '../../components/freecontent/CommentBox';
import CommentList from '../../components/freecontent/CommentList';
import CommentWrite from '../../components/freecontent/CommentWrite';

const bakeryData = {
    "title":"베이커리와 만나다.\n광화문역,아띠베이커리",
    "profile_image":require("../../assets/images/avatar-3.jpg"),
    "writer":"skosi_7695",
    "create_data":"2021.01.22 12:05",
    "maincontent":"제과명장 인정받은 빵집,\n아띠 85도씨 베이커리",
    "subcontent":"서울대앞에서 젤 유명한 빵집 아띠에요.\n좋은 재료만으로 맛난 빵 만들어서 유명하고요.\n손님들이 끊이지 않더라고요.\n깜빠뉴도 유명하고 무엇보다 케익이 맛나기도 해요.\n조각케이도 있고 마카롱도 있고,여기는 빵이\n다 맛있다고 하면 안믿으실라나요?\n\n그만큼 빵에 자부심을 갖고 만드십니다.\n커피도 달달하니 좋고요.자리도 테이블 두개정도\n 있으니 가셔서 맛난빵 드세요!\n\n추천합니다",
    "content_img":[
        {
            "image": require("../../assets/images/breadcontent1.png")
        },
        {
            "image": require("../../assets/images/breadcontent2.png")
        },
        {
            "image": require("../../assets/images/breadcontent3.png")
        }
    ]
}

const BakeryContent = () => {

    const [modalOpen,setModalOpen] = useState(false);
    return (
        
        <View style={{flex:1,backgroundColor:COLORS.white}}>
            <Modal transparent={true} visible={modalOpen} style={{width:500}} animationType='slide'>
              
                <CommentList setModalOpen={setModalOpen} />
                <View >
                    <CommentWrite /> 
                </View>
            </Modal>
            <ScrollView style={{height:600}}>
            <View style={{flex:1,backgroundColor:COLORS.white,height:'auto'}}>
                
                <TitleArea bakeryData={bakeryData} />
                <ContentArea bakeryData={bakeryData} />
            </View>
            </ScrollView>
            <View style={{flex:1,height:100}}>
                <CommentBox setModalOpen={setModalOpen} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default BakeryContent
