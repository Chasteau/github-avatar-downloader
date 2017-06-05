//Goal
//In this activity, you will partially implement a single function called getRepoContributors. Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's contributors endpoint. Upon receiving the results, your function will invoke a callback function with the results. This callback function will loop over and print out the avatar_url for each object in the collection.

// require nodes request
var API_KEY = require("../API_KEY");
var fs = require('fs');
var request = require('request');

function returnAvatarUrl(error, response) {
	var json = JSON.parse(response.body);
  if (error) {
    console.error(error);
  } else if (response.statusCode == 503) {
    console.error('Server error');
  } else {
	  for (i = 0; i < json.length; i++) {
		  //console.log(json[i].avatar_url);
		  return(jason[i].avatar_url);
	  }
  } 
}

function getRepoContributors(repoOwner, repoName, cb) {
// Token 
var GITHUB_USER = "Chasteau";
var GITHUB_TOKEN = API_KEY;
var userAgent = "--User-Agent: Chasteau"  
var requestURL =` https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
	var options = {
		url: requestURL,
		headers: {
			'User-Agent': userAgent
		}
	}
request(options, cb);
}

//getRepoContributors("jquery", "jquery", printAvatarUrl);

function downloadImageByURL(url, filePath) {	
	var options = {
		url: url,
		headers: {
			'User-Agent':"Chasteau"
		}
	}
	
	request.get(options, filePath)               
       .on('error', function (err) {                                
         throw err; 
       })
       .on('response', function (response) {
		console.log("Downloading image..");
         console.log(`Response Status Code: ${response.statusCode}, Reponse content type: ${response.headers['content-type']}`);
       })
		.on('end', function (response) {
		console.log("Saved image to disk-->");
       })
       .pipe(fs.createWriteStream(filePath));  
}

//downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "/git_images/pic.jpeg");
downloadImageByURL(getRepoContributors("jquery", "jquery", printAvatarUrl), path"");