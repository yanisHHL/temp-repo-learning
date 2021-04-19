const http = require("http");

const server = http.createServer((req,res)=>{
if(req.url === "/"){
    res.end("Hello this is my webserever");
}
if(req.url==="/about"){
    res.end("about me")
}
res.end("<h1>wrong catsel</h1>")

})

server.listen(5000)