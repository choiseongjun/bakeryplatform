import React from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS } from '../../constants';
import HomeHeader from '../../components/common/HomeHeader';
import TopTitle from '../../components/home/TopTitle';
import BakeryContents from '../../components/home/BakeryContents';
import FreeContents from '../../components/home/FreeContents';
import RecommandArea from '../../components/home/RecommandArea';

const Home = () => {
    return (
        <View style={{backgroundColor:COLORS.white,height:'auto'}}>
            <ScrollView>
                <HomeHeader />
                <TopTitle />
                <BakeryContents />
                <FreeContents />
                <RecommandArea />
            </ScrollView> 
        </View> 
    )
}

export default Home
