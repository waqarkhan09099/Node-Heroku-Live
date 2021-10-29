const express= require('express')
const app=express()
const port= process.env.PORT|| 4000
const path=require("path");


app.use('/',(req,res,next)=>{
    console.log("came Request form server",Date.now())
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello World !!! Muhammad Waqar Khan Ai And Chatbot")
})
app.get('/name',(req,res)=>{
    res.send("My name is Khan")
})



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});