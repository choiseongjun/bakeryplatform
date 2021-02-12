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
import CategoryMenuHeader from '../../components/common/CategoryMenuHeader';

const Home = ({navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [categoryMenu,setCategoryMenu ] = useState(false);

    const renderMain = () =>{
        return(
            <>
                <Modal transparent={true} visible={modalOpen} style={{width:500}} animationType='slide'>
                <RequireLogin navigation={navigation} setModalOpen={setModalOpen} />
                </Modal>
                <ScrollView> 
                    <HomeHeader setCategoryMenu={setCategoryMenu} />
                    <TopTitle />
                    <BakeryContents navigation={navigation} setModalOpen={setModalOpen}/>
                    <FreeContents navigation={navigation} />
                    <RecommandArea />
                </ScrollView> 
            </>
        )
    }
    const renderCategory = () =>{
        return(
            <View>
                <CategoryMenuHeader setCategoryMenu={setCategoryMenu} />
                <Text>dsff</Text>
            </View>
        )
    }

    return (
        <View style={{backgroundColor:COLORS.white,height:'auto'}}>
            {categoryMenu?renderCategory():renderMain()}
        </View> 
    )
}

export default Home
