import * as types from './actionTypes';
import * as api from '../utils/api';
import { showLoading, hideLoading } from 'react-redux-loading'

export const receiveTweets = (tweets) => ({
    type: types.RECEIVE_TWEETS,
    tweets
});

const toggleTweet = ({id, authedUser, hasLiked}) => ({
    type: types.TOGGLE_TWEET,
    id,
    authedUser,
    hasLiked
})

export const handleToggleTweet = (info) => dispatch => {
    dispatch(toggleTweet(info));
    api.saveLikeToggle(info)
    .catch((e)=> {console.warn('Error in toggleTweet',e);
    dispatch(toggleTweet(info));
    alert('There was an error liking the tweet. Try again.');
    })
}

const addTweet = (tweet) =>({
    type: types.ADD_TWEET,
    tweet
})

export const handleAddTweet = (text,replyingTo) => (dispatch,getState) => {
    const { authedUser } = getState();
    console.log("authedUser",authedUser)
    dispatch(showLoading())
    api.saveTweet({text,
        author:authedUser,
        replyingTo})
    .then((tweet) => {dispatch(addTweet(tweet))})
    .then(() => dispatch(hideLoading()))
}


