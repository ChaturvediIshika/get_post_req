const { urlencoded } = require('express');
const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.use(urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send("Request send");
})

app.post('/user',(req,res)=>{
    console.log(req.body);
    res.send("post request");
})

app.listen(3000,()=>{
    console.log("server running");  
})