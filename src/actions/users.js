import * as types from './actionTypes';

const receiveUsers = (users) => ({
    type: types.RECEIVE_USERS,
    users
});

export default receiveUsers;