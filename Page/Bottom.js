import React from 'react';
import {   
  View,
  Text,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ContentWrite from './contentWrite/ContentWrite';
import { icons } from '../constants';
import Home from './home/Home';
import Profile from './Profile/Profile';
import Recommand from './recommand/Recommand';

const Tab = createBottomTabNavigator();


  
function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
function Bottom() {
    return(
        <Tab.Navigator
          tabBarOptions={{
            style:{
              height:70,
              borderTopColor:'#D3D3D3',
              borderTopWidth:1
            }   
          }}
        > 
            <Tab.Screen name="컨텐츠" component={Home}   
            
              options={{
               
                title: '',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: size, height: size }}
                      source={icons.house}
                    />
                  );
                },
              }}
            />
            <Tab.Screen name="검색" component={HomeScreen} 
              options={{
                title: '',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: size, height: size }}
                      source={icons.search2}
                    />
                  );
                },
              }}
            />
            <Tab.Screen name="글쓰기" component={ContentWrite} 
              options={{
                unmountOnBlur: true,
                title: '',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: size, height: size }}
                      source={icons.plus}
                    />
                  );
                },
              }}
            />
            <Tab.Screen name="추천글" component={Recommand} 
              options={{
                title: '',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: size, height: size }}
                      source={icons.heart}
                    />
                  );
                },
              }}
            />
            <Tab.Screen name="마이페이지1" component={Profile} 
              options={{
                title: '',
                tabBarIcon: ({size,focused,color}) => {
                  return (
                    <Image
                      style={{ width: size, height: size }}
                      source={icons.profile}
                    />
                  );
                },
              }}
            />
        </Tab.Navigator>
    ) 
} 


export default Bottom; 