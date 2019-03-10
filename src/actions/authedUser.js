import * as types from './actionTypes';

const receiveAuthedUser = (authedUser) => ({
    type: types.RECEIVE_AUTHED_USER,
    id: authedUser
});

export default receiveAuthedUser;