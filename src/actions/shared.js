import * as api from '../utils/api';
import receiveAuthedUser from './authedUser';
import {receiveTweets} from './tweets';
import receiveUsers from './users';
import { showLoading, hideLoading } from 'react-redux-loading'

const LOGGED_IN_USER = 'dan_abramov';
export const handleInitialData = () => dispatch => {
    dispatch(showLoading());
    return api.getInitialData().then(({users, tweets}) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(receiveAuthedUser(LOGGED_IN_USER));
        dispatch(hideLoading());
    })
}

export function handleID() {
    return (dispatch) => {
        return api.getInitialData().then(({users,tweets}) => {
        dispatch(receiveTweets(tweets));
        dispatch(receiveUsers(users));
        dispatch(receiveAuthedUser(LOGGED_IN_USER));
        })
    }
}
