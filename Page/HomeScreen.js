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
} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import { icons, images, SIZES, COLORS, FONTS } from '../constants';
import Header from '../components/common/Header';
 
const HomeScreen = ({navigation}) => {

    const [bakeryData,setBakeryData] = useState([]);
    const [ colors, setColor ] = useState({
      color: 'white',
      preColor: 'rgb(243,96,65)',
      bgColor: 'rgb(243,96,65)',
      preBgColor: 'white'
    });

    const [ toggle, setToggle] = useState(true);

    const changeToggle = () => { 
      setToggle(!toggle);
      checktoggle();
    };

    const moveMap = () => {

    } 
    useEffect(() => {
      axios.get('http://3.35.255.192:8080/backery')
      .then(function (response) {
        // handle success
        setBakeryData(response.data)
      })
      .catch((err)=>{
        console.log(err.response)
      })
    }, [])


    const checktoggle = () => {
      if(!toggle) {
        setColor({
          color:'rgb(243,96,65)',
          preColor: 'white',
          bgColor: 'white',
          preBgColor: 'rgb(243,96,65)'
        });
      }
      else {
        setColor({
          color: 'white',
          preColor: 'rgb(243,96,65)',
          bgColor: 'rgb(243,96,65)',
          preBgColor: 'white'
        });
      }
    };
    const renderBakery = () =>{
        return(
          bakeryData.map((item,index)=>
          <TouchableOpacity onPress={() => navigation.navigate('BakeryDetail',{bakeryId:item.id})}>
            <EachBread key={index}>
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
                            height: '100%'
                        }}
                    />
             
              </EachBread>
            </TouchableOpacity>
          )
        )
    }
    

    return (
      <SafeAreaView style={ styles.container }>
        <Header />
        <View style = {{flex:1, padding: 10}}>
          <ContainerHeaderOption>
            <HeaderOptionList disabled={!toggle} onPress = { changeToggle } style = {{backgroundColor:colors.bgColor}}>
              <HeaderOptionList__Text style = {{color: colors.color}}>리스트</HeaderOptionList__Text>
            </HeaderOptionList>
            <HeaderOptionList disabled={toggle} onPress = {changeToggle} style = {{backgroundColor:colors.preBgColor}}>
              <HeaderOptionList__Text style = {{color: colors.preColor}}>지도</HeaderOptionList__Text>
            </HeaderOptionList>
          </ContainerHeaderOption>
          {/* <SearchBarContainer>
            <IconFilter>
              <IconAntDesign name='plussquare' color='rgb(243,96,65)' size={30} />
            </IconFilter>
            <Text style = {{color:'gray', fontSize:16, fontWeight:'400', marginRight:70, marginLeft: 10}}>가장 맛있는 빵은 당신 주변에 있습니다.</Text>
            <IconFilter>
              <IconAntDesign name='edit' color='rgb(243,96,65)' size={30} />
            </IconFilter>
          </SearchBarContainer> */}
          <View style = { styles.container__listBread}>
            {/* <Location>
              <View>
                <Text style = {{ fontWeight:'bold', fontSize:20 }}>양재 2동
                </Text>
              </View>
              <View>
                <Text style = {{ color:'rgb(243,96,65)', fontWeight:'300', fontSize:14 }}>현재 내 위치 수정
                </Text>
              </View>
            </Location> */} 
            <ScrollList>
              {renderBakery()}
            </ScrollList>
          </View>
        </View>

      </SafeAreaView>
    );
  }
  const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'rgb(250,250,250)'
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
  });
  
  const ContainerHeaderOption = styled.View`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
  `;
  const HeaderOptionList = styled.TouchableOpacity`
    width:100px;
    height:60px;
    margin-right: 10px;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
  const HeaderOptionList__Text = styled.Text`
    color: white;
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
  
  const Location = styled.View`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    margin-bottom:10px;
  `;
export default HomeScreen
