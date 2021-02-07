import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './Page/Bottom';
import { createStackNavigator } from "@react-navigation/stack";

import BakeryDetail from './Page/BakeryDetail/BakeryDetail';

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
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
5