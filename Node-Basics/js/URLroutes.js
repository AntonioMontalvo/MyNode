//First things first.
const http = require('http');
const url = require('url');

var port = 3000;


//This function handles all 
function routesGalore(request, response) {
    var pathOptions = url.parse(request.url).pathname;
    //handle possible paths for the site
    if (pathOptions === "/") {
        response.writeHead(200, {
            "content-Type": "By defualt you get this..."
        });
        response.end("This is the Home Page")
    } else if (pathOptions === "/redirect") {
        response.writeHead(301, {
            "Location": "http://www.google.com"
        });
        response.end();

    } else if (pathOptions === "/demonstrate") {
        response.writeHead(200, {
            "content-Type": "You got this page because you type /demonstrate after http://localhost:3000"
        });
        response.end("You got this page because you http://localhost:3000/demonstrate.       NOW BE BRAVE AND TYPE http://localhost:3000/redirect");
    } else {
        response.writeHead(404, {
            "Conte-Type": "this is for Page Not Found"
        });
        response.end("Page not found");
    }
}

var server = http.createServer(routesGalore);

server.listen(port, function() {
    console.log("Hi, I'm the Server. Listening in port " + port + ". Go to your browser and type http://localhost:3000 and it will take you to the landing page. But now you have options. In the browser type http://localhost:3000/demonstrate and will show you other content.")
});