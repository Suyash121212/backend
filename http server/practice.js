const http = require("http");
const fs = require("fs");
const url=require("url");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()} ${req.url} new log added successfully\n`;
    const myurl = url.parse(req.url);
    console.log(myurl);
    fs.appendFile('./log.txt',log,(err,log)=>{
        res.end("hello from server");
    })  
    // req.url give the path 
    // console.log("request recieved");
    // two entries on the .txt are for :one is for favicon adn one is for the page   
    
});

const port = 8000;
myserver.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`);
})
