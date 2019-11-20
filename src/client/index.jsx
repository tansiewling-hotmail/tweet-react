import React from 'react';
import ReactDOM from 'react-dom';
import tweets from 'tweets.js';

class App extends React.Component {
  render() {

    let displayTweet = this.props.tweetsIn.map((singleTweet) => {
        return(
            <li>{singleTweet.text}</li>
        );
    });
    return (
      <div>
        {displayTweet}
      </div>
    );
  }
}

const element = document.getElementById('app');

ReactDOM.render(<App tweetsIn = {tweets} />, element );

console.log("tweet react");
console.log(tweets);
console.log(tweets[0]);