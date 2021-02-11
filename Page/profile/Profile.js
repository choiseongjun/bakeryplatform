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

const Profile = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);


    useEffect(() => {

        if(!loginCheck)
            navigation.navigate('Login')
    },[])

    return (
        <View>
          
            <Text>dfsdf</Text>
        </View>
    )
}

export default Profile
