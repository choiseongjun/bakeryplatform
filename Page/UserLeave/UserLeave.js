import React,{useEffect,useState} from 'react'
import {   
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NormalHeader from '../../components/common/NormalHeader';

const UserLeave = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);

    /*
    *로그인 유무 체크
    */
    const getUserData = async () => {
        try {
          const value = await AsyncStorage.getItem('accessToken')
          if(value !== null) {
            // value previously stored
            setLoginCheck(true);
          }
        } catch(e) {
          // error reading value
        }
    }
      
    useEffect(() => {
        // getUserData();
        // if(!loginCheck)
        //     navigation.navigate("Login")
    },[])

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingRight: SIZES.padding * 2.4,
    paddingLeft: SIZES.padding * 2.4,
  },

})

export default UserLeave
