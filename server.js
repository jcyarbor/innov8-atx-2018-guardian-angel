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
	}
};
	
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();

function https-call(method, url , path, querysting, body, 