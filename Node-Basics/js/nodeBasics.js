console.log("Hello Node.js");

//With the use of the keyword require we can grab the data exported from another file and use it here.

var colors = require("./colors.js"); //Done. Now we have access to colors.js 

console.log("My favorite color is " + colors.favoriteColors.first);// See! We got blue

console.log(colors.add(2,3));