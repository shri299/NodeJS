const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
    const superhero = {
        "name":"srishti",
        "age":"30"
    };
    //res.writeHead(200,{"Content-Type":"text/plain"});
    //res.end("Hello World");

    // res.writeHead(200,{"Content-Type":"application/json"});
    // res.end(JSON.stringify(superhero));

    // res.writeHead(200,{"Content-Type":"text/html"});
    // res.end("<h1>Hello World</h1>");

    const name = "Srishti";
    res.writeHead(200,{"Content-Type":"text/html"});
    let html = fs.readFileSync("./index.html","utf-8");
    html = html.replace("{{name}}",name);
    res.end(html);
    //fs.createReadStream("./index.html").pipe(res);
});

server.listen(3000,()=>{
    console.log("server runninh on port 3000");
});