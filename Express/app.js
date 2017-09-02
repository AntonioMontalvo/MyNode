/////////////////////////////////
//  Application Dependencies   //
/////////////////////////////////
//here we tell node.js that 'express' is a dependenciy in this application/ express() is a top-level function exported by the express module. Basically an instance of express.
const express = require("express");
const app = express();

//Path is one of Node's built in modules. The path module provides utilities for working with file and directory paths
var path = require('path');

//Body Parser. We need to parse incoming request bodies in a middleware before your handlers.
var bodyParser = require('body-parser');

//getting access to the School data.
var school = require("./lib/school.js");


/////////////////////////////////
//  Application Methods        //
/////////////////////////////////
//app.use([path,] callback [, callback...])
//Mounts the specified middleware function or functions at the specified path. Since .css files are static files you have to serve them to the clients. Using the express.static middleware in an Express app. Serve static content for the app from the “public” directory in the application directory. What this means is that this middleware will make available to the app all the files in the public directory. To <link> it in the .html file your path is no longer from the .html file to the .css file but straight from /public in our cas is <link rel="stylesheet" href="/css/school.css">

app.use(express.static(__dirname + '/public'));

// tell express to use this middleware to parse urlencoded bodies. The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({ extended: true }));



/////////////////////////////////
// Our server's possible Routes//
/////////////////////////////////

//app.get(path, callback [, callback ...]); Routes HTTP GET requests to the specified path with the specified callback functions.

//when the server gets "/"
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views/express-basics.html')); //sendFile transfers the filefile at the given path with the response, in this case the Home Page.
    console.log(school.mySchool); //we send our school's data 
});

//when the server gets a request for "/routing/"
app.get("/routing", function(req, res) {
    res.sendFile(path.join(__dirname, 'views/routes.html')); //respond sending the routes page 
});

//if the server gets a request for "/schoolPage/" 
app.get("/schoolPage/", function(req, res) {
    res.sendFile(path.join(__dirname, 'views/myElementarySchool.html')); //send the school page
});

//with the path below the response is a json object.
app.get("/schoolPage/:studentsPerGrade", function(req, res) {
    res.json(school.mySchool); //the browser will display it.
})


//app.post(path, callback [, callback ...]); Routes HTTP POST requests to the specified path with the specified callback functions. When receiving a POST or PUT request, with the request body can grab the data. "req.body" contains key-value pairs of data submitted in the request body. 
app.post('/schoolPage/newStudent', function(req, res) {
    var newStudent = req.body;

    res.json(newStudent);
    console.log(newStudent);
});

//Handle 404 page not found. This is 100% "kosher" but I like it.
app.use(function(req, res) {
    res.sendFile(path.join(__dirname,'views/notFound.html'));
});


//start listening
app.listen(3000, function() {
    console.log(school.mySchool);

    console.log("app listening on port 3000!. Go to http://localhost:3000"); //confirm app is listening
});