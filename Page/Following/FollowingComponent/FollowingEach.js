import React,{useEffect,useState} from 'react'
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
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SquareButton from '../../../components/common/SquareButton';

const FollowingEach = ({navigation, name, TitleImage}) => {

    const [loginCheck,setLoginCheck] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

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
            <View style={styles.eachUserFollowing}>
              <View style={styles.eachUserFollowing__image}>
                <Image 
                source={TitleImage}
                style={{
                  width: 40,
                  height: 40,
                }}
                />
                <Text style={[styles.eachUserFollowing__Text]}>{name}</Text>
              </View>
              <View>
                <SquareButton iconSource={icons.plus} />
              </View>
            </View>
    )
}

const styles = StyleSheet.create({

  eachUserFollowing: {
    height: 70,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },

  eachUserFollowing__Text: {
    fontWeight: 'bold',
    fontSize:SIZES.font,
    paddingLeft: 10
  },

  eachUserChoice__image: {
    width: 16, 
    height: 16, 
  },

  eachUserFollowing__image: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default FollowingEach
