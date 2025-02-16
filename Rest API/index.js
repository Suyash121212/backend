const express = require('express');
const users= require('./MOCK_DATA.json');
const fs = require('fs');
const app = express();
const port = 8080;
// routes
// REST API

app.use(express.urlencoded({extended:false}));

app.get('/api/users',(req,res)=>{
    return res.json(users);
    // return res.send (users); gives same result 
});

app.get('/users',(req,res)=>{
    // rendering with HTML 
    const html=`<ul> ${users.map((user)=>`<li>${user.first_name} ${user.last_name}</li>`).join('')}</ul>`; 
    res.send(html); 

})


// :id -> dynamically id  , gives the specific id user
// http://localhost:8080/api/users/1


app.get('/api/users/:id',(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json(user);
})

app.post('/api/users', (req, res) => {
    const body = req.body;
    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: "error", message: "Failed to write data" });
        }
        return res.json({ status: "success", id: users.length }); // return the id of the user
    });
});


app.patch('/api/users/:id',(req,res)=>{
    // TODO edit user with id
    return  res.json({status:"pending"});
})

app.delete('/api/users/:id',(req,res)=>{    
    // TODO delete user with id
    return  res.json({status:"pending"});
})

// as we can see the '/api/users/:id' is common in all the routes
// we can do it like this
// chaining the routes
app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=> user.id===id);
    return res.json(user);
})
.post((req,res)=>{
    // TODO create new user
   return  res.json({status:"pending"});
})
.patch((req,res)=>{
    // TODO edit user with id
    return  res.json({status:"pending"});
})  
.delete((req,res)=>{
    // TODO delete user with id
    return  res.json({status:"pending"});
})

app.listen(port,()=>console.log(`server is startes on http://localhost:${port}`));
