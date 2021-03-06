import produce from 'immer';

export const initialState = {
    userinfoLoading:false, //내정보로딩
    userinfoDone:false,//내정보로딩완료
    userInfo:[]
};

export const USER_INFO_REQUEST = 'USER_INFO_REQUEST';
export const USER_INFO_SUCCESS = 'USER_INFO_SUCCESS';
export const USER_INFO_FAILURE = 'USER_INFO_FAILURE';

export const USER_LOGOUT_REQUEST = 'USER_LOGOUT_REQUEST';
export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS';
export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE';

const userReducer = (state = initialState, action) => produce(state, (draft) => {

    switch (action.type) {
        case USER_INFO_REQUEST:
            break;
        case USER_INFO_SUCCESS:
            draft.userinfoDone = true;
            draft.userInfo = action.data;
            break;
        case USER_INFO_FAILURE: 
            draft.userinfoDone = false;
            break;
        case USER_LOGOUT_REQUEST:
            break;
        case USER_LOGOUT_SUCCESS:
            draft.userInfo = [];
            break;
        case USER_LOGOUT_FAILURE:
            break;
        default:
            break;
    }
})
export default userReducer;