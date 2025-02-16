const express = require('express');
const app = express();
const port  = 8000;
app.get('/',(req,res)=>{
    res.send("Welcome to the main page.\n HEllo from the Main page ")
});
 app.get('/about',(req,res)=>{
    res.send("hello this is a about page")
 })
 
app.listen(port,()=>{
    console.log(`server is running on the http://localhost:${port}`);
})
