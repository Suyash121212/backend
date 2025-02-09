console.log("hello file this is the file handling");
const { log } = require("console");
const fs = require("fs");

const { readFile } = require("fs/promises");
fs.writeFileSync("./hello.txt","hello this is the writeFileSync function");
fs.writeFile("./asyncfile.txt","hello this is the writeFile asynchronous function",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file written succesfully");
    }
});
console.log("reading the file.....");
const data  = fs.readFileSync("./hello.txt","utf-8");
console.log(data);

fs.readFile("./asyncfile.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log(result);
    }
});

