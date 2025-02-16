
// const http = require("http");
const url = require("url");


// console.log(app); this will shows all the methods in that app like get or post 
// this is the code for the get and post method of the req by 
// using the express framework code becomes clean and short 

const express=require('express');

const app = express();
app.get("/",(req,res)=>{
    return res.send(`hello from home page hey `);
})
app.get("/about",(req,res)=>{
    res.send(`wlcm to about page${req.query.name},${req.query.age}`)
})
// we can do post like this same 
app.post("/signup",(req,res)=>{

})
// function handler(req,res){
//     (req, res) => {
//         const log = `${Date.now()},${req.method},${req.url} new log added successfully\n`;
//         // console.log(req.url);
//         const myurl = url.parse(req.url, true);
//         console.log(myurl);
    
    
//         fs.appendFile("log2.txt", log, () => {
//             // switch(req.url){
//             //     case "/":  res.end("welcome to my server this is the HOME PAGE");
//             //     break;
//             //     case "/about":res.end("This is the about page");
//             //     break;
//             //     case "/contact-us":res.end("this is the contact us page");
//             //     default:res.end("404 error");
//             // }
//             switch (myurl.pathname) {
//                 case "/":
//                     if (req.method === "GET")
//                         res.end("welcome to my server this is the HOME PAGE");
//                     break;
//                 case "/about":
//                     const username = myurl.query.username;
//                     res.end(`This is the about page hi ${username}`);
//                     break;
//                 case "/signup":
//                     if (req.method === "GET") res.end("this is the signup page")
//                     else if (res.method === "POST") {
//                         // DB Query
//                         res.end("success");
//                     }
//                     break;
//                 case "/search":
//                     const search = myurl.search;
//                     res.end("here are ur result for the ", search);
//                 default: res.end("404 error");
    
//             }
    
//         })
    
//     }
// }


// const myserver = http.createServer(app)

// const portno = 8000;
// myserver.listen(portno, (err, data) => {
//     d on http://localhost:console.log(`server starte${portno}`);
// })


const port=8000;
app.listen(port,()=>{
    console.log("server start on http://localhost:"+port)
})
