//Goal
//In this activity, you will partially implement a single function called getRepoContributors. Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's contributors endpoint. Upon receiving the results, your function will invoke a callback function with the results. This callback function will loop over and print out the avatar_url for each object in the collection.

// require nodes request
var request = require('request');
//require nodes filesys
var fs = require('fs');
//import api key
var API_KEY = require("../API_KEY")

function printAvatarUrl(error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode == 503) {
    console.error('Server error');
  } else {
//	  else if (response.statusCode == 200) {
    var json = JSON.parse(body);

    // for (var i = 0; i < json.data.length; i++) {
    //   var currentBeer = json.data[i];
    //   displayBeer(currentBeer);
    // }

    //json.data.forEach(vatar_url)
	  console.log(json);
  }
}

function getRepoContributors(repoOwner, repoName, cb) {
// Token 
var GITHUB_USER = "Chasteau";
var GITHUB_TOKEN = API_KEY;
var requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
	
request(requestURL, processData);
	
//console.log(requestURL);
//	request.get(requestURL)   
//       .on('error', function (err) { 
//		console.log("Errors:", err);
//       })
//       .on('response', function (response) {
////		console.log(JSON.parse(response.body))
//        cb(response.body); 
//	}
//		.on('end', function (response) {
//		console.log('complete');
//       })
//		  )};
//       .pipe(fs.createWriteStream('./downloaded.html'));  
//	console.log(resposne);
}

// This callback function will loop over and print out the avatar_url for each object in the collection.


getRepoContributors("jquery", "jquery", printAvatarUrl);
//getRepoContributors("jquery", "jquery", printAvatarUrl);