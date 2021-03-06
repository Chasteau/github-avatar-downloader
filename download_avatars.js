//Goal
//In this activity, you will partially implement a single function called getRepoContributors. Using the request package, you will fetch the list of contributors as a JSON string from the GitHub API's contributors endpoint. Upon receiving the results, your function will invoke a callback function with the results. This callback function will loop over and print out the avatar_url for each object in the collection.

// require nodes request
var API_KEY = require("../API_KEY");
var fs = require('fs');
var request = require('request');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function returnAvatarUrl(error, response) {
	var json = JSON.parse(response.body);
	
  	if (error) {
		console.log(error);
	} else {
	  for (i = 0; i < json.length; i++) {
		  //console.log(json[i].avatar_url);
		  return(json[i].avatar_url);
	  	}
		
  	} 
}

var repoOwner = process.argv[2];
var repoName = process.argv[3];

function getRepoContributors(repoOwner, repoName, cb) {
// Token 
	var GITHUB_USER = "Chasteau";
	var GITHUB_TOKEN = API_KEY;
	var userAgent = 'GitHub Avatar Download - Student Project'  
	var requestURL =` https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
	var options = {
		url: requestURL,
		headers: {
			'User-Agent': userAgent
		}
	}
	
	if (!repoOwner && !repoName) {
		console.log("must input repoOwner and repoName!");
	} else {
	request(options, cb);
	}
}

//getRepoContributors("jquery", "jquery", printAvatarUrl);

function downloadImageByURL(url, filePath) {	
	var options = {
		url: url,
		headers: {
			'User-Agent':'GitHub Avatar Download - Student Project'
		}
	}
	
	mkdirp(getDirName(filePath), function (err){
		if (err) throw err;
	})
	
	request.get(url, filePath)               
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

var dlPath = process.argv[3];

//getRepoContributors('jquery', 'jquery', returnAvatarUrl);
//(downloadImageByUR(getRepoContributors('jquery', 'jquery', returnAvatarUrl), dlPath);