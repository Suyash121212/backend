const express = require('express');
const app = express();
const port = 9090;

app.get('/',(req,res)=>{
    console.log(req.headers);
    res.setHeader("myname",'Suyash Kakade')
    res.send('Hello World !!!');
});

app.get('/about',(req,res)=>{
    res.send('welcome to about page');
})

app.listen(port,()=>console.log(`server is running on the http://localhost:${port}`)
);
