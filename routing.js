const http = require("node:http");

const server = http.createServer((req,res)=>{

    //res.end(req.url);

    if(req.url === "/")
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.end("Home page");
    }else if(req.url==="/about")
    {
        res.writeHead(200,{"Content-head":"application/json"});
        res.end(JSON.stringify({
            "name":"srishti",
            "age":30
        }));
    }else{
        res.writeHead(404);
        res.end("page not found");
    }

});

server.listen(3000,()=>{
    console.log("server running on port 3000");
});