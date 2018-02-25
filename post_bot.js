console.log('The bot is starting\n');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// ***POST METHOD***

// setInterval(tweetIt, 1000*20) //repear function every 20 seconds.
function tweetIt() {
  //floor function so it doesnt have a decimal
  var r = Math.floor(Math.random()*100);
  var tweet = {
    status: 'here is a random number ' + r + ', another tweet from node.js'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log("it worked")
    };
  };
  console.log("Shutting down.");
}
//after module.exports._____ the name of the function above is used (tweetIt)
module.exports.tweetIt = tweetIt;
