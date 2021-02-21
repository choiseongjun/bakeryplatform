import React,{useState,useEffect} from 'react'
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const Home = ({navigation}) => {
    const [modalOpen, setModalOpen] = useState(false);//로그인모달창 오픈여부
    const [categoryMenu,setCategoryMenu ] = useState(false);


    // useEffect(() => {
        
    //     token.then((item)=>{
    //         if(item===null){
    //             setModalOpen(true);
    //         }else{
    //             setModalOpen(false);
    //         }
    //     }) 


    // },[])
    useFocusEffect(
        React.useCallback( () => {
          let token = AsyncStorage.getItem('accessToken');    
          token.then((item)=>{
              console.log('item',item)
            if(item===null){
                setModalOpen(true);
            }else{
                setModalOpen(false);
            }
          })
          
        }, [])
      ); 

    const renderMain = () =>{
        return(
            <>
                <Modal transparent={true} visible={modalOpen} style={{width:500}} animationType='slide'>
                {modalOpen&&<RequireLogin navigation={navigation} setModalOpen={setModalOpen} />}
                </Modal>
                <ScrollView> 
                    <HomeHeader setCategoryMenu={setCategoryMenu} />
                    <TopTitle />
                    <BakeryContents navigation={navigation}  modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    <FreeContents navigation={navigation}  modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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
