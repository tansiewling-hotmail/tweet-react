import React from 'react';
import ReactDOM from 'react-dom';
import User from 'user.jsx';
import tweets from 'tweets.js';

class App extends React.Component {
  render() {

     let displayTweet = this.props.tweetsIn.map((singleTweet) => {
        return(
            <div class="row">
                <div class="col">
                    <img src={singleTweet.user.profile_image_url} />
                </div>
                <div class="col">
                    {/*<p>{singleTweet.user.name} @{singleTweet.user.screen_name}</p>*/}
                    <User userInfo={singleTweet.user} />
                    <p>{singleTweet.text}</p>
                </div>
            </div>
        );
    });

    return (
      <div id="container">
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
console.log(tweets[0].entities.media[0].media_url);