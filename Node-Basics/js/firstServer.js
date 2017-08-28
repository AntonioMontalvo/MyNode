//In order to use the HTTP module we must require it as below.
var http = require('http');
var port = 3000;


//To create a Server we must do http.createServer([requestListener]). Notice it takes an argument, which must be a function to handle the request and the response to and from the Server. In our first example the response uses the response.end([data][, encoding][, callback]) method.
var server = http.createServer(function(request, response){
	response.end("Magic! We've got our Server running. We have succesfully created a Server which is responding with this message.")
});

//The Server has been created. Now we'll make it listen to the appropriate port and callback.
server.listen(port, function(){
	console.log("Hi, I'm the Server. Listening in port " + port + ". Go to your browser and type http://localhost:3000")
});


