import React, { useState,useEffect } from 'react';
import {   
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform, 
  PermissionsAndroid,
  FlatList,
  Animated,
  LayoutAnimation
} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import Header from '../components/common/Header';
import MapView, { PROVIDER_GOOGLE,Marker } from "react-native-maps";
import Spinner from 'react-native-loading-spinner-overlay';
import { Callout } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';



async function requestPermission() { 
  try { 
    if (Platform.OS === "ios") { 
      return await Geolocation.requestAuthorization("always"); 
    } // 안드로이드 위치 정보 수집 권한 요청 
    if (Platform.OS === "android") { 
      return await PermissionsAndroid.request( PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, ); 
    } 
  } catch (e) { 
    console.log(e); 
  } 
}

const bestSearchListData=[
  {
    rank:1,
    name:"마카롱"
  },
  {
    rank:2,
    name:"앙버터"
  },
  {
    rank:3,
    name:"크로와상"
  },
  {
    rank:4,
    name:"우드랜브릭"
  },
  {
    rank:5,
    name:"강남"
  },
  {
    rank:6,
    name:"크로플"
  },
  {
    rank:7,
    name:"와플"
  },
  {
    rank:8,
    name:"딸기케이크"
  },
  {
    rank:9,
    name:"인스타핫플"
  },
  {
    rank:10,
    name:"바게트"
  },
]

const HomeScreen = ({navigation}) => {

    const [bakeryData,setBakeryData] = useState([]);
    const [ colors, setColor ] = useState({
      color: COLORS.black,
      preColor: COLORS.darkgray,
    });
    
    const [fonts, setFont] = useState({
      fontWeight: '700',
      preFontWeight: '600',
    });

    const [bottom, setBottom] = useState({
      bottom: -200,
      preBottom: 0
    })
    
    const scrollX = new Animated.Value(0);

    const [ toggle, setToggle] = useState(true);
    const [location, setLocation] = useState(); 
    const [page,setPage] = useState(1); 
    const [loading,setLoading] = useState(false);
    const [searchVisible,setSearchVisible] = useState(false);
    const [searcListVisible,setSearcListVisible] = useState(false);
    const [searchText,setSearchText] = useState('');
    const [mapStoreList,setMapStoreList] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    
    const [enlarge,setEnlarge] = useState(false);//맵에 있는 스토어 확대 여부
    const pan = React.useRef(new Animated.ValueXY()).current;
    const _map = React.useRef(null);
    const _scrollView = React.useRef(null);
    let endReachCall;

    const isTouchedStore = {
      upSize: 0,
      downSize: -200
    }

    if(enlarge === false) {
      isTouchedStore.upSize = -200
      isTouchedStore.downSize = 0
    } else {
      isTouchedStore.upSize = 0
      isTouchedStore.downSize = -200
    }

    useEffect(() => { 
      requestPermission().then(result => {
        console.log({ result });
        if (result === "granted") {  
          Geolocation.getCurrentPosition( 
            pos => { 
              setLocation(pos.coords); 
            }, 
            error => { 
              console.log(error); 
            }, 
            { 
              enableHighAccuracy: true, 
              timeout: 3600, 
              maximumAge: 3600, 
            }, 
          ); 
        } 
      }); 
    }, []);

    const changeToggle = () => { 
      setToggle(!toggle);
      checktoggle();
    };
    useEffect(() => {
      setLoading(true);
      console.log('gggg')
      axios.get('/bakery?page='+page)
      .then(function (response) {
        // handle success
        console.log('res',response)
        setBakeryData([...bakeryData, ...response.data]);
        setLoading(false);
      })
      .catch((err)=>{
        console.log(err)
        setLoading(false);
      })
    }, [page])

    useEffect(() => {
      
    },[])

    const touchStore = () => {
      LayoutAnimation.spring()
      isClicked ?
      setBottom({
        bottom: -38,
        preBottom: -200
      })
      :
      setBottom({
        bottom: -200,
        preBottom: -38
      })
    }


    const checktoggle = () => {
      if(!toggle) {
        setColor({
          color: COLORS.black,
          preColor: COLORS.darkgray,
        });

        setFont({
          fontWeight: '600',
          preFontWeight: '700',
        });
      }
      else {
        setColor({
          color: COLORS.darkgray,
          preColor: COLORS.black,
        });

        setFont({
          fontWeight: '700',
          preFontWeight: '600',
        });
      }
    };
    /*
     * 상단 헤더바 검색
    */
    const doSearch = () =>{
      setLoading(true);

      axios.get(`/bakery?page=${page}&keyword=${searchText}`)
      .then(function (response) {
        // handle success
        setBakeryData(response.data);
        setLoading(false);
        setSearcListVisible(false);
        setSearchVisible(false);
      })
      .catch((err)=>{
        console.log(err.response)
        setLoading(false);
      })
    }
    const changeLocation = (item) =>{
      
      console.log('item change',item)

      axios.post('/bakerylocation',{xposIo:Math.floor(item.longitude * 10)/10,yposIa:Math.floor(item.latitude * 100)/100})
      .then(function (response) {
        setMapStoreList(response.data)
        console.log('responseData',response.data)
      })
      .catch((err)=>{
        console.log(err)
        console.log(err.response)
      })
    }
    const renderBakery = ({item}) =>{
        return(
          <TouchableOpacity onPress={() => navigation.navigate('BakeryDetail',{bakeryId:item.id})}>
            <EachBread key={item.id}>
                <View style={{width:220,marginTop:30}}>
                  <Text style = {{fontWeight:'bold', fontSize: 20, color:COLORS.black }}>
                    {item.entrpNm}
                  </Text> 
                  <View style={{width:190}}>
                    <Text style = {{display:'flex',flexWrap:'wrap', fontSize: SIZES.base*1.8, color:COLORS.black }}>
                      {item.loadAddr}
                    </Text> 
                  </View>
                  <View style={{marginTop:40,display:'flex',flexDirection:'row'}}>
                    <Text style = {{ fontSize: SIZES.base*1.8, color:COLORS.black }}>
                      리뷰 5
                    </Text> 
                    <Text style = {{marginLeft:30, fontSize: SIZES.base*1.8, color:COLORS.black }}>
                      연중무휴
                    </Text> 
                  </View>
                </View>
                
                <Image
                        source={{uri: "data:image/png;base64,"+item.image}}
                        resizeMode="cover"
                        style={{
                            width: '50%',
                            height: '100%',
                        }}
                    />
              </EachBread>
            </TouchableOpacity>
          
        )
    }
    
    const renderStoreList = () =>{

      React.useEffect(() => {
        scrollX.addListener(({value}) => {
          console.log(value)
        })
      })

      return(
        <>
        <View style = {{
          flex:1, 
          paddingLeft: SIZES.padding * 2.4,
          paddingRight: SIZES.padding *2.4
          }}
        >
          <ContainerHeaderOption>
            <ContainerFlex>
              <HeaderOptionList disabled={toggle} onPress = { changeToggle }>
                <HeaderOptionList__Text style = {{
                  color: colors.color,
                  fontWeight:fonts.fontWeight,
                  fontSize:SIZES.base*2.5
                  }}
                >
                  목록
                </HeaderOptionList__Text>
              </HeaderOptionList>
              <HeaderOptionList style={{position: 'relative'}}>
                <HeaderOptionList__Text 
                style={{
                  position: 'absolute',
                  bottom:-6,
                  color: COLORS.darkgray
                }}>
                  |
                </HeaderOptionList__Text>
              </HeaderOptionList>
              <HeaderOptionList disabled={!toggle} onPress = {changeToggle} style={{borderRightWidth: 0}}>
                <HeaderOptionList__Text 
                style = {{
                  color: colors.preColor,
                  fontWeight:fonts.preFontWeight,
                  fontSize:SIZES.base*2.5
                  }}
                >
                  지도
                </HeaderOptionList__Text>
              </HeaderOptionList>
            </ContainerFlex>
            <HeaderOptionList style={{
              height: '100%', 
              position:'relative',
              width:25, 
              marginRight:0,
              alignItems:'flex-end'
              }}
            >
              <HeaderOptionList__Text 
              onPress={ () => navigation.navigate('SearchFilter')}
              style={{
                position:'absolute', 
                top:24,
                }}
              >
                <Image
                  source={icons.filter}
                  resizeMode="contain"
                  style={{
                    width: SIZES.base*2.5,
                    height: SIZES.base*2.6,
                  }}
                />
              </HeaderOptionList__Text>
            </HeaderOptionList>
          </ContainerHeaderOption>
          <View style = { styles.container__listBread}>
            
              {toggle?
                <FlatList
                  data={bakeryData}
                  renderItem={renderBakery}
                  onEndReachedThreshold={1.5}
                  keyExtractor={item => item.id}
                  onEndReached={({ distanceFromEnd }) => {
                    if (distanceFromEnd < 0) return;
                    setPage(page + 1);  
                }}
                />
              :
              <>
              <View style={{flex:1}}>
              <MapView
                ref={_map}
                style={{height:'100%'}}
                provides={PROVIDER_GOOGLE}
                onRegionChangeComplete={region => changeLocation(region)}
                initialRegion={{ 
                  latitude: 37.77489, 
                  longitude: 128.91155,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421, 
                }}>
                
                {mapStoreList.map((item, index) => (
                  <Marker
                    key={`location-${index}`}
                    coordinate={{
                      latitude: item.yposIa,
                      longitude: item.xposIo,
                    }}
                    title="Test title"
                    description="This is to test description"
                  >
                    <Image source={require('../assets/icons/breadmapicon.png')} style={{width:30,height:30}} /> 
                    <Callout tooltip> 
                        <View style={styles.bubble}>
                          <Text style={styles.name}>{item.entrpNm}</Text>
                          {/* <Text>Short description</Text>
                      
                          <Text style={{ height: 200, position: "relative", bottom: 40 }}>
                              <Image
                                resizeMode="cover"
                                style={{ width: 70, height: 90, }}
                                source={{uri: "data:image/png;base64,"+item.image}}
                              />
                          </Text> */}
                        </View>
                    </Callout>
                  </Marker>
                ))}
              </MapView>
                  <Animated.ScrollView
                    ref={_scrollView}
                    horizontal
                    scrollEventThrottle={16}
                    pagingEnabled={true} 
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={10}
                    style={[styles.scrollView,{
                      bottom: bottom.bottom
                    }
                    ]}
                    maximumZoomScale={4}
                    minimumZoomScale={0.5}
                  
                  >
                      {mapStoreList.map((item,index)=>(
                        <View style={styles.card}>
                          <View>
                            <TouchableOpacity 
                              onPress={
                                ()=>{
                                  setIsClicked(!isClicked);
                                  touchStore();
                                }
                              }

                            >
                              <Text style={{fontFamily:'NotoSans-Black',fontSize: SIZES.base*3.2}}>{item.entrpNm}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity >
                              <Text style={{fontSize:SIZES.base*2}}>{item.loadAddr}</Text>
                            </TouchableOpacity>
                            <View style={{display: 'flex',flexDirection: 'row',marginTop:15}}>
                                <Text style={{fontSize:SIZES.base*2,color:COLORS.maingray}}>리뷰 5</Text>
                                <Text style={{fontSize:SIZES.base*2,marginLeft:15,color:COLORS.maingray}}>|</Text>
                                <Text style={{fontSize:SIZES.base*2,marginLeft:15,color:COLORS.maingray}}>연중무휴</Text>
                            </View>
                          </View>
                            <Image
                             source={{uri: "data:image/png;base64,"+item.image}}
                             resizeMode="cover"
                             style={{
                                position: 'absolute',
                                right:0,
                                 width: 100,
                                 height: 140
                             }}
                            />
                      </View>
                      ))}
                  </Animated.ScrollView>
              </View>
              </>
              }
            
          </View>
        </View>
        </>
      )
    }

    const bestSearchList = () =>{
      return(
        <View style={{marginTop:30,marginLeft:20}}>
          <Text style={{fontFamily:'NotoSans-Black',fontSize: SIZES.base*3.4}}>인기 검색어</Text>
          <View style={{marginTop:15}}>
            {bestSearchListData.map((item,index)=>(
              <View style={{display: 'flex',flexDirection: 'row',marginTop:15}}>
                {index<3?
                <>
                  <Text style={{fontWeight: 'bold',fontSize: SIZES.base*2.5}}>{item.rank}</Text>
                  <Text style={{position: 'absolute',left:40,fontWeight: 'bold',fontSize: SIZES.base*2.5}}>{item.name}</Text>
                </>
                :
                <>
                  <Text style={{fontSize: SIZES.base*2.5}}>{item.rank}</Text>
                  <Text style={{position: 'absolute',left:40,fontSize: SIZES.base*2.5}}>{item.name}</Text>
                </>
                }
              </View>
            ))}
          </View>
        </View>
      )
    }

    return (
      <SafeAreaView style={ styles.container }>
         <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Header 
          searchVisible={searchVisible} 
          setSearchVisible={setSearchVisible} 
          setSearcListVisible={setSearcListVisible} 
          searchText={searchText}
          setSearchText={setSearchText}
          doSearch={doSearch}
        />
        {searcListVisible?bestSearchList():renderStoreList()}

      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(255,255,255)',

    },
    container__listBread:{
      flex:12,
      marginTop: 10,
    },
    listBread__eachList:{
      flex:1,
    },
  
    image:{
      flex:1,
      resizeMode: 'contain',
      justifyContent:'center',
      alignItems:'center',
    },
    bubble: {
      backgroundColor: COLORS.white,
      borderRadius: 6,
      borderColor: '#ccc',
      borderWidth: 0.5, 
      width: 100,
      height:100,
      
    },
    // Character name
    name: {
      fontSize: 16,
    },
    // Character image
    scrollView: {
      position: "absolute",
      left: -10,
      right: 0,
      bottom:-200
    },
    card: {
      padding: 10,
      elevation: 2,
      backgroundColor: "#FFF",
      marginHorizontal: 10, 
      shadowColor: "#000",
      shadowRadius: 5,
      shadowOpacity: 0.3,
      shadowOffset: { x: 2, y: -2 },
      height: 330,
      width: 370,
      overflow: "hidden",
      display:'flex',
      flexDirection:'row',
      
    },
    cardImage: {
      flex: 3,
      width: "100%",
      height: "100%",
      alignSelf: "center",
    },
  });

  const ContainerFlex = styled.View`
    
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  `;

  
  const ContainerHeaderOption = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  const HeaderOptionList = styled.TouchableOpacity`
    margin-right: 10px;
    color:white;
    display: flex;
    justify-content: center;
  `;
  
  const HeaderOptionList__Text = styled.Text`
    
  `;
  
  const SearchBarContainer = styled.View`
    backgroundColor:rgb(250,250,250);
    width: 100%;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
  `;
  
  const IconFilter = styled.View`
    display:flex;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;
  
  const ScrollList = styled.ScrollView`
    flex:1;
  `;
  
  const EachBread = styled.View`
    width: 100%;
    height:180px;
    margin-top: 10px;
    background-color: white;
    display:flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  
  const EachBread__Inbox = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 100%;
  `;
  
  const EachBread__Inbox_more = styled.View`
    width:33px;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
  `;
  

export default HomeScreen