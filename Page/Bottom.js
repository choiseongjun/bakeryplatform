import React from 'react';
import {   
  View,
  Text,
  Image
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { icons } from '../constants';
import Home from './home/Home';

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
        <Tab.Navigator> 
            <Tab.Screen name="추천" component={Home}   
            
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
            <Tab.Screen name="임시" component={HomeScreen} 
              options={{
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
            <Tab.Screen name="마이페이지" component={HomeScreen} 
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
            <Tab.Screen name="마이페이지1" component={HomeScreen} 
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