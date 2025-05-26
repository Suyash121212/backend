const express = require('express');
const app = express();
const port  = 8000;

app.use(express.static('public')); // build in middleware to serve the static files

 
// middldeware 1                 
app.use((req,res,next)=>{
    console.log('middleware 1');
    next(); //here next id passes the next middleware or route , if we dont pass
    //  next() then the request will be stuck here
})



// middleware 2
app.use((req,res,next)=>{
console.log("middleware 2");
next();


})
app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/about',(req,res)=>{
    res.send('Hello about');
})

app.get('/contact',(req,res)=>{
    res.send('Hello contact');
})
app.listen(port,()=>{
    console.log(`server is running on the http://localhost:${port}`);
})

