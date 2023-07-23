const path = require("node:path")

//or

//const path = require("path")

//path module has 14 different method and modules
//we'll focus on 7 of them

console.log(__filename); //return full path to the file
console.log(__dirname);  //return full path to the firectory where the file is located

console.log(path.basename(__filename)); 
console.log(path.basename(__dirname));

console.log(path.extname(__filename)); 
console.log(path.extname(__dirname));

console.log(path.parse(__filename)); 

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute("./data.json"));


console.log(path.join("folder1","folder2","index.html"));
console.log(path.join("/folder1","folder2","index.html"));
console.log(path.join("/folder1","//folder2","index.html"));
console.log(path.join("/folder1","folder2","../index.html"));
console.log(path.join(__dirname,"srishti.json"));


console.log(path.resolve("folder1","folder2","index.html"));
console.log(path.resolve("/folder1","folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","index.html"));
console.log(path.resolve("/folder1","//folder2","../index.html"));
console.log(path.resolve(__dirname,"srishti.json"));