console.log('The bot is starting\n');

var Twit = require('twit');
var config = require('./config');
var T = new Twit(config);

// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.question('What subject tweet are you interested in? ', (answer) => {
//   console.log(`You are looking for tweets relating to: ${answer}`);
//   rl.close();
// });

// ***GET METHOD***
// param entry point for get function

// getIt();
function getIt() {
  var params = {q: 'Coding', count: 5};
  //the get request to search for tweets using the params specified above
  T.get('search/tweets', params, gotData);

  function gotData(err, data, response) {
    var tweets = data.statuses;
    for (var i = 0; i < tweets.length; ++i){
        console.log(tweets[i].text);
        console.log("\n");
    };
  };
}

// ***POST METHOD***

// tweetIt();
// setInterval(tweetIt, 1000*20)
function tweetIt() {
  //floor function so it doesnt have a decimal
  var r = Math.floor(Math.random()*100);
  var tweet = {
    status: 'here is a random number ' + r + ', another tweet from node.js #testingbots'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
        console.log("something went wrong");
    } else {
        console.log("it worked")
    };
  };
}
