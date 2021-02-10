import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './Page/Bottom';
import { createStackNavigator } from "@react-navigation/stack";

import BakeryDetail from './Page/bakeryDetail/BakeryDetail';
import Join from './Page/join/Join';
import Login from './Page/login/Login';

const Stack = createStackNavigator();

function App(){
  return ( 
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}
            >
                <Stack.Screen name="Home" component={Bottom} />
                <Stack.Screen name="BakeryDetail" component={BakeryDetail} />
                <Stack.Screen name="Join" component={Join} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
5