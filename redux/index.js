import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import axios from 'axios';
import userReducer from './reducers/userReducer';
import userSaga from './sagas/userSaga';
import AsyncStorage from '@react-native-async-storage/async-storage';



// axios.defaults.baseURL = 'http://14.49.85.65:8080/';
// const getToken = AsyncStorage.getItem('accessToken');
// getToken.then((item) => {
//   if (item != null) {
//     axios.defaults.headers.common['Authorization'] = 'Bearer ' + item;
//   }
// });

const rootReducer = combineReducers({
    userReducer
})

export function* rootSaga() {
    yield all([
        userSaga()
    ]);
}

export default rootReducer;