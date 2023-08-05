// const fs = require("node:fs");
const fsPromise = require("node:fs/promises")

// //Read the contents of a file

// const fileContent = fs.readFileSync("./file.txt","utf-8"); //This is a synchronous method to read the file
// console.log(fileContent);

// fs.readFile("./file.txt","utf-8",(error,data) => {
//     if (error) {
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// }); //This is a Asynchronous method to read the file


// //write into a file

// fs.writeFileSync("./greet.txt","Hello World!!");

// fs.writeFile("./greet.txt","Helluuu!!!", {flag:"a"},(error) => {
//     if(error){
//         console.log(error);
//     }else{
//         console.log("Contents are written");
//     }
// });


//fs promise module

console.log("first");
fsPromise.readFile("./file.txt","utf-8")
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)});
console.log("second");
