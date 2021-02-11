import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './Page/Bottom';
import { createStackNavigator } from "@react-navigation/stack";
import axios from 'axios';
import BakeryDetail from './Page/bakeryDetail/BakeryDetail';
import Join from './Page/join/Join';
import Login from './Page/login/Login';
import FreeContentDetail from './Page/freeContent/FreeContentDetail';
import SearchFilter from './Page/SearchFilter/SearchFilterHome/SearchFilter';
import BakeryContent from './Page/bakeryContent/BakeryContent';

const Stack = createStackNavigator();

axios.defaults.baseURL = 'http://14.49.85.65:8080/';

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
                <Stack.Screen name="FreeContentDetail" component={FreeContentDetail} />
                <Stack.Screen name="SearchFilter" component={SearchFilter} />
                <Stack.Screen name="BakeryContent" component={BakeryContent} />
                
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
5