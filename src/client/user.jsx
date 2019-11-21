import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js';

class User extends React.Component {
  render() {
    return (
      <div>
        {this.props.userInfo.name} @{this.props.userInfo.screen_name}
      </div>
    );
  }
}

export default User;

// const element = document.getElementById('app');

// ReactDOM.render(<App tweetsIn = {tweets} />, element );

// console.log("tweet react");
// console.log(tweets);
// console.log(tweets[0]);