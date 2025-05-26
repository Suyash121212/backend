const express = require('express');
const app  = express();

const morgan = require('morgan');

app.use(morgan('dev'));
app.get('/',(req,res)=>{
    res.send('hello from the main page')
})

app.get('/about',(req,res)=>{
    res.send('hello from the about page')
});

app.listen(8000,()=>{
console.log('server is running on http://localhost:8000');

});