import * as types from '../actions/actionTypes';

const users =  (state={}, action) => {
    switch(action.type) {
        case types.RECEIVE_USERS : 
        return {
            ...state,
            ...action.users
        }
        default : 
        return state
    }
};

export default users;