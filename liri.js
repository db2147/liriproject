/* Command: node liri.js <argument>

Arguments:
- my-tweets
- spotify-song
- movie-this
- do-what-it-says

*/
var keys = require("./keys.js");
var Twitter = require("twitter");

var spotifyKeys = require("./spotifykeys.js");
var Spotify = require('node-spotify-api');

var omdbKeys = require("./omdbkeys.js");               //api is returning an error but when I test in postman it is ok                     
var request = require("http://www.omdbapi.com/?i=tt3896198&apikey=b9b0673f");

var arg1 = process.argv[2];
var arg2 = process.argv[3];

function getMyTweets() {
    // ... logic that uses your api key to retrieve tweets

    var client = new Twitter(keys);

    var params = {
        screen_name: 'Jose Ole'
    };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {

            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);
                console.log("-------------------------------------------------------");
            }
        }
        if (error) {
            console.log(error);
        }
    });

}


var spotify = new Spotify({
    id: '2fe392f8af4848e3b98721af5fbd4851',
    secret: 'd36c3bfe004c4c03b12e392cefda57b2'
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
 if (err) {
   return console.log('Error occurred: ' + err);
 }

console.log(data); 
}); 

//..omdb section
var movieName = process.argv[2];

// wrap code in function called getAMovie
function getAMovie(movieName) {

omdb.find('Forrest', 'movie').then(function (movie) {
    (movie).should.be.a.Array;
    movie[0].Title.should.be.exactly('Forrest Gump');
});
 
omdb.get('Breaking Bad', 'series').then(function (serie) {
    serie.Title.should.be.exactly('Breaking Bad');
    serie.should.have.properties({
        Response: 'True'
    });
});

// returning the parameter movieName from function getAMovie
return movieName;
}


if (arg1 === "my-tweets") {
    getMyTweets();

}  else if (arg1 === "spotify-song") {
    console.log("blank");

}   else if (arg1 === "movie-this") {
        getAMovie(arg2);

}  else if (arg1 === "do-what-it-says") {
    console.log("blank");

} else {
    console.log("I don't know this command... ");

} 

    



