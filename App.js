import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import axios from 'axios';
import Bottom from './Page/Bottom';
import BakeryDetail from './Page/bakeryDetail/BakeryDetail';
import Join from './Page/join/Join';
import Login from './Page/login/Login';
import FreeContentDetail from './Page/freeContent/FreeContentDetail';
import SearchFilter from './Page/SearchFilter/SearchFilterHome/SearchFilter';
import BakeryContent from './Page/bakeryContent/BakeryContent';
import Profile from './Page/profile/Profile';
import ProfileAppSetting from './Page/ProfileAppSetting/ProfileAppSetting';
import Recommand from './Page/home/Home';
import Following from './Page/Following/FollowingHome/following';
import StorePost from './Page/StorePost/StorePostHome/StorePostHome';
import IndividualInfoCheck from './Page/IndividualInfoCheck/IndividualInfoCheck';
import OnBoarding from './Page/onBoarding/OnBoarding';
import UserLeave from './Page/UserLeave/UserLeave';
import ContentWrite from './Page/contentWrite/ContentWrite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './redux'
import { USER_INFO_REQUEST } from './redux/reducers/userReducer';
import { useDispatch } from 'react-redux';


axios.defaults.baseURL = 'http://192.168.0.21:8080/';
 
// getToken.then((item) => {
//   if (item != null) {
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + item;
//   }
// })
const sagaMiddleware = createSagaMiddleware();
const enhancedReducer = rootReducer;
const store = createStore(
  enhancedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);
sagaMiddleware.run(rootSaga);

const Stack = createStackNavigator();

function App(){
  const dispatch = useDispatch();
  const getToken = AsyncStorage.getItem('accessToken');
  useEffect(() => {
    
    getToken.then((item) => {
      console.log('appitem',item)
      if (item != null) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + item;
        dispatch({
          type: USER_INFO_REQUEST
        });
      }
    });

  },[getToken])
  return (  
        <NavigationContainer> 
            <Stack.Navigator screenOptions={{
              headerShown: false,
            }}
            >
                {/* <Stack.Screen name="OnBoarding" component={OnBoarding} /> */}
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
                <Stack.Screen name="UserLeave" component={UserLeave} />
                <Stack.Screen name="ContentWrite" component={ContentWrite} />
            </Stack.Navigator>
        </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
