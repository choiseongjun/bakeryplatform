import React from 'react';
import {   
  View,
  Text,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';

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
            <Tab.Screen name="추천" component={HomeScreen} />
            <Tab.Screen name="검색" component={SettingsScreen} />
            <Tab.Screen name="홈" component={HomeScreen} />
            <Tab.Screen name="마이페이지" component={HomeScreen} />
        </Tab.Navigator>
    ) 
} 


export default Bottom; 