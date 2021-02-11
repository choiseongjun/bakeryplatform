import React,{useEffect,useState} from 'react'
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
import { icons, iconsSvg, SIZES, COLORS,images } from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Profile = ({navigation}) => {

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
        <View>
          
            <Text>dfsdf</Text>
        </View>
    )
}

export default Profile
