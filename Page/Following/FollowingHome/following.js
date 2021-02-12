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
import NormalHeader from '../../../components/common/NormalHeader';

import FollowingEach from '../../Following/FollowingComponent/FollowingEach';

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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.optionBar}>
          <NormalHeader contents={[icons.vividBlackBack, '팔로잉', icons.menubar]} />
        </View>
        
        <View style={styles.userContainer}>
          <FollowingEach TitleImage={icons.blackCircle} name={'skosi_7657'} />
          <FollowingEach TitleImage={icons.blackCircle} name={'hok_OOOOO'} />
          <FollowingEach TitleImage={icons.grayCircle} name={'hok_OOOOO'} />
        </View>

      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    paddingRight: SIZES.padding * 2.4,
    paddingLeft: SIZES.padding * 2.4,
  },

  userFollowing: {
    flex: 1,
    flexDirection:"column",
  },

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

export default Profile
