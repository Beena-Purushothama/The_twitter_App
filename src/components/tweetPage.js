import React, { Component } from 'react'
import Tweet from './tweet';
import NewTweet from './newTweet';
import {connect} from 'react-redux';

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props
    return (
      <div>
      {console.log("idd=",id)}
        <Tweet id={id}></Tweet>
        <NewTweet id={id}/>
        {replies.length !== 0 && <h3 className='center'>Replies</h3>}
        <ul>
          {replies.map((replyId) => (
            <li key={replyId}>
              <Tweet id={replyId}/>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, tweets, users}, props) =>{
    const {id}= props.match.params; 
    console.log("ids=",id)
    return {id,
        replies: !tweets[id] ? [] : tweets[id].replies.sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
    }
}
export default connect(mapStateToProps)(TweetPage);