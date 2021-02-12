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
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../constants';

const SquareButton = ({navigation, iconSource}) => {

    const [loginCheck,setLoginCheck] = useState(false);
    const [isClicked, setIsClicked] = useState(true);

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
      <>
        {
          isClicked ? 
          <TouchableOpacity 
            style={styles.unFollowContainer}
            onPress={() => {
              setIsClicked(!isClicked)
            }}
          >
            <Text style={styles.unFollowContainer__text}>팔로잉</Text>
          </TouchableOpacity> 
          :
          <TouchableOpacity 
            style={styles.FollowContainer}
            onPress={() => {
              setIsClicked(!isClicked)
            }}
          >
            <Text style={styles.FollowContainer__text}>팔로우</Text>
            <Image source={iconSource} />
          </TouchableOpacity> 
        }
      </>

    )
}

const styles = StyleSheet.create({
  unFollowContainer: {
    minHeight: 40,
    minWidth: 70,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  unFollowContainer__text: {
    color:'white',
    fontWeight: 'bold'
  },
  FollowContainer: {
    minHeight: 40,
    minWidth: 70,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  FollowContainer__text: {
    color:'black',
    fontWeight: 'bold'
  }

})

export default SquareButton
