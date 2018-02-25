
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
var Twit = require('twit');
var config = require('./config'); // only config is needed in the two bot modules.
var T = new Twit(config);

// ***GET METHOD***
// param entry point for get function

function getIt() {
  var params = {q: 'Coding', count: 2};
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
//after exports the name of the function is used
module.exports.getIt = getIt;
