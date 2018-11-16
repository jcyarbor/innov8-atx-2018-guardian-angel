// import statement
var express = require("express"),
app = express();

var port = process.env.PORT || 8080;

// import statement
const querystring = require("querystring");
const https = require('https');

// initialing app
app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
	var user_name = request.query.user_name;

	response.end("Hello " + user_name + "!");
});

//profile url is https://www.facebook.com/profile.php?id=100014295046013
//parse for profile id

app.get("/searchUser", function(request, response) {
	var url = request.query.URL;
	
	response.send("This is the URL you are searching : " + url);
	
	const postData = querystring.stringify({
		'msg': url
	});
	
	const options = {
	hostname: 'findmyfbid.com',
	port: 443,
	path: '/',
	method:  'POST',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Content-Length': Buffer.byteLength(postData)
		//accept: application/json
		
	//return response;

//profile id should be 100014295046013
//Get the picture from facebook profile
		
//curl -i -X GET “https://graph.facebook.com/v3.2/{user_id}/picture?access_token={access_token}”
		
		//const options = {
			//hostname: 'https://graph.facebook.com/v3.2/100014295046013/picture?access_token='
			//port: 443,
			//path: '/'
			//method: 'GET'
			//headers: {
		//'Content-Type': 'application/x-www-form-urlencoded',
		//'Content-Length': Buffer.byteLength(postData)
			}
		//}

		//sending photo to tineye
		
		//const options = {
		//hostname: https://www.tineye.com/search
		//port: 443.
		//path: '/'
		//methos: 'POST'
		//headers: {
		//accept: application/json
		
		//return 10 results;
		

		
		//location information request.
		
//curl -i -X GET “https://graph.facebook.com/v3.2/100014295046013?fields=location&access_token=EAAImoSZC5N1MBACKUQLLzPtDOuyzcaG5peDLDPdTNk7lv9EcGG7w5N3f9FvtEO5yKQgzcHUQxBHMvKSDwEFxE00Ov0zbj6PEZB7yL84fgZCLZCqab4mZBZAnP8ZBKZCgvMDZCXkYxDxmJZB4Hl9O8VQvZBOntu0Y0jZB8yJ9pEhfbPWA4tUHSWWT10K6WNF5wX716PJvjGjlUlxOtw2S0GdGI9L43oBjcOSqrSwqSPU4OcNhMU87UZA30GKCS”

		
		
		//hardcoded response
		//response.send("Juan Julio is from Hacker Valley, WV, USA")
		
//curl -v -X -H “accept: application/json” -d “url=https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/46362759_496818504137980_2517528254877794304_n.jpg?_nc_cat=106&_nc_ht=scontent.xx&oh=5bcdfb420fea99e1c8ccfd205363cc15&oe=5C71166E
	//}
	}
};
	
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();

function https-call(method, url , path, querysting, body, 
