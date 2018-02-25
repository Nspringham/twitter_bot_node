var Twit = require('twit');
//config not required because it is not dealing with the API dorectly
var get_Bot = require('./get_bot')
var post_Bot = require('./post_bot')

// get_bot comes from the require variable above
get_Bot.getIt();
//.getIt comes from the module.export variable in get_bot.js
post_Bot.tweetIt();
