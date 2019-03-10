import types, { RECEIVE_AUTHED_USER } from '../actions/actionTypes';

const authedUser = (state=null, action) => {
    switch(action.type) {
        case RECEIVE_AUTHED_USER :
        return action.id
        default :
        return state
    }
};


export default authedUser;