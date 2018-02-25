var Twit = require('twit');
var config = require('./config'); // only config is needed in the two bot modules.
var T = new Twit(config);

// ***GET METHOD***
// param entry point for get function

function getIt(user, amount) {
  var params = {q: user, count: amount};
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
// User input for
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What subject tweet are you interested in? ', (user) => {
  rl.question('How many tweets do you want returned? ', (amount) => {
    getIt(user, amount);
    rl.close();
  });
});

//after exports the name of the function is used
module.exports.getIt = getIt;
