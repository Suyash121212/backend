console.log('program started')
const { log } = require('console');
const http = require('http');
const myserver = http.createServer((req,res)=>{
    console.log("new request receives");
    console.log(req.headers);

    res.end("<h1>hello form server</h1>");
})

// port number required to run the 
const port = 8001;
myserver.listen(port,()=>console.log(`server started on http://localhost:${port}`));

