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
import styled from 'styled-components';
import { icons, iconsSvg, SIZES, COLORS,images, FONTS } from '../../../constants';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';
import NormalHeader from '../../../components/common/NormalHeader';
import { FlatList } from 'react-native-gesture-handler';


const StorePostHome = ({navigation}) => {

    const [loginCheck,setLoginCheck] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [bakeryData, setBakeryData] = useState([])
    const [isClicked, setIsClicked] = useState(false);
    const [ colors, setColor ] = useState({
      color: COLORS.black,
      preColor: COLORS.darkgray,
    });
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

    const changeClick = () => {
      setIsClicked(!isClicked);
      checkClick();
    }
      
    useEffect(() => {
      setLoading(true);
      axios.get('/bakery?page='+page)
      .then(function(response) {
        setBakeryData([...bakeryData, ...response.data])
        setLoading(false)
      })
      .catch((err) => {
        console.log(err.response)
        setLoading(false);
      })
        // getUserData();
        // if(!loginCheck)
        //     navigation.navigate("Login")
    },[page])

    const checkClick = () => {
      if(isClicked) {
        setColor({
          color: COLORS.black,
          preColor: COLORS.darkgray,
        })
      } else {
        setColor({
          color: COLORS.darkgray,
          preColor: COLORS.black,
        })
        
      }
    }

    const renderStoreBakeryContents = ({item}) => {
      return (
        <TouchableOpacity>
          <EachBakeryContent>
            <Image
              source={{uri: "data:image/png;base64,"+item.image}}
              resizeMode="cover"
              style={{
                width: '38%',
                height: '100%',
              }}
            />
            <View style={styles.bakeryContentDescriptionBox}>
              <View>
                <Text style={styles.bakeryContentDescriptionBox__title}>베이커리와 만나다 광화문역, 아띠베이커리</Text>
              </View>
              <View>
                <Text style={styles.bakeryContentDescriptionBox__userName}>skosi_7695</Text>
              </View>
            </View>
          </EachBakeryContent>
        </TouchableOpacity>
      )
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <NormalHeader contents={[icons.vividBlackBack, '저장한 글', icons.menubar]} />
        <View style={styles.userContainer}>
          <View style={styles.choiceContents}>
            <TouchableOpacity
              style={[styles.choiceContentsEach, {borderBottomColor: colors.color}]}
              onPress={() => {
                isClicked && changeClick()
              }}
            >
              <Text style={[styles.choiceContentsEach__text, {color:colors.color}]}>베이커리 컨텐츠</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.choiceContentsEach, {borderBottomColor: colors.preColor}]}
              onPress={() => {
                !isClicked && changeClick()
              }}  
            >
              <Text style={[styles.choiceContentsEach__text, {color: colors.preColor}]}>자유로운 컨텐츠</Text>
            </TouchableOpacity>
          </View>
          {
            !isClicked ? 
            <FlatList 
              data={bakeryData}
              renderItem={renderStoreBakeryContents}
              onEndReachedThreshold={1.5}
                  keyExtractor={item => item.id}
                  onEndReached={({ distanceFromEnd }) => {
                    if (distanceFromEnd < 0) return;
                    setPage(page + 1);  
                }}
            />
            :
            <FlatList
            
            />

          }
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

  choiceContents: {
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingTop: 24
  },

  choiceContentsEach: {
    borderBottomWidth: 3,
    borderBottomColor: COLORS.deepDarkgray,
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingBottom: 5
  },

  choiceContentsEach__text: {
    fontSize:SIZES.h4,
    fontWeight: 'bold'
  },

  bakeryContentDescriptionBox: {
    paddingLeft: 20,
    flex: 1
  },

  bakeryContentDescriptionBox__title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },

  bakeryContentDescriptionBox__userName: {
    fontWeight:'normal',
    fontSize: 14,
    color: COLORS.deepDarkgray
  }
  })

const EachBakeryContent = styled.View`
  width: 100%;
  height: 160px;
  margin-top: 18px;
  background-color: white;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`



export default StorePostHome
