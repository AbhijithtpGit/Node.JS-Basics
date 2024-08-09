 

// file name

console.log(__filename);

// dir name

console.log(__dirname);


// modules

const path = require("path");
const { Script } = require("vm");

console.log(path.basename(__filename));

// dir name

console.log(path.basename(__dirname));


// parse

console.log(path.parse(__filename));

// join
console.log(path.join(__dirname,"api","script.js"));


