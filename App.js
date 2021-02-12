import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './Page/Bottom';
import { createStackNavigator } from "@react-navigation/stack";
import axios from 'axios';
import BakeryDetail from './Page/BakeryDetail/BakeryDetail';
import Join from './Page/join/Join';
import Login from './Page/login/Login';
import FreeContentDetail from './Page/freeContent/FreeContentDetail';
import SearchFilter from './Page/SearchFilter/SearchFilterHome/SearchFilter';
import BakeryContent from './Page/bakeryContent/BakeryContent';
import Profile from './Page/Profile/Profile';
import ProfileAppSetting from './Page/ProfileAppSetting/ProfileAppSetting';
import Recommand from './Page/home/Home';
import Following from './Page/Following/FollowingHome/following';
import StorePost from './Page/StorePost/StorePostHome/StorePostHome';
import IndividualInfoCheck from './Page/IndividualInfoCheck/IndividualInfoCheck';

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
                <Stack.Screen name="Recommand" component={Recommand} />
                <Stack.Screen name="BakeryDetail" component={BakeryDetail} />
                <Stack.Screen name="Join" component={Join} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="FreeContentDetail" component={FreeContentDetail} />
                <Stack.Screen name="SearchFilter" component={SearchFilter} />
                <Stack.Screen name="BakeryContent" component={BakeryContent} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="ProfileAppSetting" component={ProfileAppSetting} />
                <Stack.Screen name="Following" component={Following} />
                <Stack.Screen name="StorePost" component={StorePost} />
                <Stack.Screen name="IndividualInfoCheck" component={IndividualInfoCheck} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default App;
5