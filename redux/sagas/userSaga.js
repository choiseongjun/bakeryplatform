import { all, fork, put, takeLatest,takeEvery,call,delay} from 'redux-saga/effects';
import axios from 'axios';
import {
    USER_INFO_REQUEST,
    USER_INFO_SUCCESS,
    USER_INFO_FAILURE
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

export default function* userSaga() {
    yield all([
        fork(watchUserInfo)
    ])
}