var express = require("express"),
    app = express();
const querystring = require("querystring");	
const https = require("https");

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var url = request.query.user_name;
  
  var postData = querystring.stringify({'url' : url});
  
  var options = {
	  hostname: 'findmyfbid.com',
	  port: 443,
	  path: '/',
	  method: 'POST',
	  headers: {
		  'Content-Type': 'application/x-www-form-urlencoded',
		  'Content-length': postData.length
	  }
  };
  
  var req = https.request(options, (res) => {
	  console.log('statusCode: ', res.statusCode);
	  console.log('headers: ', res.headers);
	  
	  res.on('data', (d) =>{
	  user_name = JSON.parse(d).explanation;
	  });
  });
  
  req.on('error', (e) => {
	  console.error(e);
  });
  
  req.write(postData);
  req.end();

  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
