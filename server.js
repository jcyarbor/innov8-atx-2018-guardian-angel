var express = require("express"),
    app = express();
	
const https = require("https");

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/sayHello", function (request, response) {
  var user_name = request.query.user_name;
  https.post('https://findmyfbid.com/?__amp_source_origin=https://findmyfbid.com','url='+user_name, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data).explanation);
  });

  }).on("error", (err) => {
	console.log("Error: " + err.message);
  });
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();
