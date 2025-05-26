const express = require('express');
const app = express();
const port = 8080;

const router = express.Router();
router.use((req,res,next)=>{
    console.log("router level middleware");
    next()
})

router.get('/',(req,res)=>{
    res.send("Hello Users ");
})

app.use('/api',router);
app.listen(port,()=>console.log(`server is started on http://localhost:${port}/api`));


