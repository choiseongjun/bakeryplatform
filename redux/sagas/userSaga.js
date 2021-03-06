import { all, fork, put, takeLatest,takeEvery,call,delay} from 'redux-saga/effects';
import axios from 'axios';
import {
    USER_INFO_REQUEST,
    USER_INFO_SUCCESS,
    USER_INFO_FAILURE,
    USER_LOGOUT_REQUEST,
    USER_LOGOUT_SUCCESS,
    USER_LOGOUT_FAILURE
} from '../reducers/userReducer';


function userInfoAPI() {
    return axios.get('/user/userInfo');
  }
  function* userInfo() {
    try {
      const result = yield call(userInfoAPI);
      yield put({
        type: USER_INFO_SUCCESS,
        data: result.data,
      });
    } catch (err) {
      console.error(err);
      yield put({
        type: USER_INFO_FAILURE,
        error: err.response.data,
      });
    }
  }
function* watchUserInfo() {
    yield takeLatest(USER_INFO_REQUEST, userInfo);
}
function* userLogout(){
  try {
    
    yield put({
      type: USER_LOGOUT_SUCCESS,
    });
  } catch (err) {

    yield put({
      type: USER_LOGOUT_FAILURE,
    });
  }
}
function* watchUserLogout(){
  yield takeLatest(USER_LOGOUT_REQUEST, userLogout);
}

export default function* userSaga() {
    yield all([
        fork(watchUserInfo),
        fork(watchUserLogout)
    ])
}