import React,{useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    Modal
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import HomeHeader from '../../components/common/HomeHeader';
import TopTitle from '../../components/home/TopTitle';
import BakeryContents from '../../components/home/BakeryContents';
import FreeContents from '../../components/home/FreeContents';
import RecommandArea from '../../components/home/RecommandArea';
import RequireLogin from '../../components/common/RequireLogin';

const Home = ({navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={{backgroundColor:COLORS.white,height:'auto'}}>
            <Modal transparent={true} visible={modalOpen} style={{width:500}} animationType='slide'>
             <RequireLogin navigation={navigation} setModalOpen={setModalOpen} />
            </Modal>
            <ScrollView> 
                <HomeHeader />
                <TopTitle />
                <BakeryContents setModalOpen={setModalOpen}/>
                <FreeContents />
                <RecommandArea />
            </ScrollView> 
        </View> 
    )
}

export default Home
