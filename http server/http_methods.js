const fs = require("fs");
const http = require("http");
const url = require("url");

const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()},${req.method},${req.url} new log added successfully\n`;
    // console.log(req.url);
    const myurl = url.parse(req.url,true);
    console.log(myurl);
    

    fs.appendFile("log2.txt",log,()=>{
        // switch(req.url){
        //     case "/":  res.end("welcome to my server this is the HOME PAGE");
        //     break;
        //     case "/about":res.end("This is the about page");
        //     break;
        //     case "/contact-us":res.end("this is the contact us page");
        //     default:res.end("404 error");
        // }
        switch(myurl.pathname){
            case "/":
            if(req.method==="GET")
            res.end("welcome to my server this is the HOME PAGE");
            break;

            case "/contact":
                res.end("this is a contact page");
                break;
            case "/about" :
            const username = myurl.query.username;    
            res.end(`This is the about page hi ${username}`);
            break;
            case "/signup":
                if(req.method==="GET") res.end("this is the signup page")
                    else if(res.method==="POST"){
                // DB Query
                res.end("success");
                }
                break;
            case "/search":
            const search = myurl.search;    
            res.end("here are ur result for the ",search);
            default:res.end("404 error");
            
        }
       
    })
    
})

// const portno = 8000;
// myserver.listen(portno,(err,data)=>{
//     console.log(`server started on http://localhost:${portno}`);
// })
 
myserver.listen(8080,(err,data)=>{
    console.log(`server is started on http://localhost:8080`);
    
})
