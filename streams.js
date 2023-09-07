//a stream is a sequece of data that is being moved from one point to another over time
//ex: a stream of data transferred from one file to another whithin same computer
//works with data in chunks instead of waiting for the entire data to be available at once
//if you are transferring data from file A to file B, you don't wait for entire data to be moved to a temporary memory before moving it into file B.
//Instead the content is transferred in chunks over time which prevents unnecessary memory usage
//stream is infact a built in module that inherits from the event emitter class.


//const { read } = require("node:fs");
const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt",{encoding:"utf-8",highWaterMark:2});

const writeableStream = fs.createWriteStream("./file1.txt");

readableStream.on("data",(chunk)=>{
    console.log(chunk);
    writeableStream.write(chunk);
})