import * as types from '../actions/actionTypes';

 const tweets=  (state={}, action) => {
    switch(action.type) {
        case types.RECEIVE_TWEETS : 
        return {
            ...state,
            ...action.tweets
        }
        case types.TOGGLE_TWEET:
        return {
            ...state,
            [action.id] : {
                ...state[action.id],
                likes: action.hasLiked ? state[action.id].likes.filter((id)=>(id !== action.authedUser))
                                       : [...state[action.id].likes,action.authedUser]
            
            }
        }
        case types.ADD_TWEET:
        const {tweet} = action;
        let replyingTo={};
        if(tweet.replyingTo !== null) {
            replyingTo = {
                [tweet.replyingTo] : {
                    ...state[tweet.replyingTo],
                    replies: state[tweet.replyingTo].replies.concat([tweet.id])
                }
            } 
        }
        return {
            ...state,
            [tweet.id] : tweet,
            ...replyingTo,
        }
        default : 
        return state
    }
}

export default tweets;