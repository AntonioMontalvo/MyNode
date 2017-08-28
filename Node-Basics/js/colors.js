console.log("Hello from colors.js");

//The Module is an Object where each module is a reference to the object representing the current module. We can use another module the exports module to make variables, functions, objects, etc.. accessible to other files outside the current file.

//Below we have an object that named favoriteColors. We use exports so favoriteColors is available from another file. 

module.exports.favoriteColors = {
		first: "blue",
		second: "orange",
		third: "black",
		fourth: "red"
}

// For demonstration, lets make available a function.

module.exports.add = (a,b) => {
	return  a + b;
}




