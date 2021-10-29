const express= require('express')
const app=express()
const port= process.env.PORT|| 4000
const path=require("path");


app.use('/',(req,res,next)=>{
    console.log("came Request form server",new Date())
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.get('/name',(req,res)=>{
    res.send("My name is Khan")
})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});