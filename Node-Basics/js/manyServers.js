//THIS TWO SERVERS ARE RUNNING. 
var http = require('http');
var fs = require("fs");
var homejs = require("../threePages/js/home.js");

var portTwo = 4000;
var portThree = 5000;
var portThreePages = 8000;


//SECOND SERVER
var secondServer = http.createServer(function(request, response){
	response.end("See! I'm the second Server. Call me Server Numero Dos.")
});

secondServer.listen(portTwo, function(){
	console.log("Hi, I'm the second Server. Listening in port " + portTwo + ". Go to your browser and type http://localhost:4000")
});

//THIRD SERVER
var thirdServer = http.createServer(function(request, response){
	response.end("See! I'm the third Server. Call me Server Numero Tres.")
});

thirdServer.listen(portThree, function(){
	console.log("Hi, I'm the third Server. Listening in port " + portThree + ". Go to your browser and type http://localhost:5000")
});

//FOR THE THREE PAGES SERVER
var serverThrePages = http.createServer(requestResponseHandler);

//fs.readFile(path[, options], callback)

function requestResponseHandler(request, response) {
    if (request.url == "/") {
        fs.readFile("../threePages/home.html", (err, data) => {
            response.end(data)
        });
    } else if (request.url == "/nyt") {
        fs.readFile("../threePages/nyt.html", (err, data) => {
            response.end(data)
        });
    } else if (request.url == "/goodbye") {
        fs.readFile("../threePages/goodbye.html", (err, data) => {
            response.end(data);
        });
    } else {
        response.end("error 404,This page is not found!");
    }
}

serverThrePages.listen(portThreePages, () => {
    console.log("Server listening in http://localhost:8000");
    console.log(homejs.congrats.saycongrats)
});

