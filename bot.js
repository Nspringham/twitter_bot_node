console.log('The bot is starting\n');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);


var params = {
  q: 'pancakes',
  count: 5
 };

//the get request to search for tweets using the params specified above
T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i = 0; i < tweets.length; ++i){
      console.log(tweets[i].text);
      console.log("\n");
  };
};
