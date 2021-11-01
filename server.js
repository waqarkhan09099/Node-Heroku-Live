const express= require('express')
const app=express()
const port= process.env.PORT|| 4000
const path=require("path");

app.use(express.json())

app.use('/',(req,res,next)=>{
    console.log("came Request from server",new Date())
    console.log(req.body)
    next()
})

app.get('/',(req,res)=>{
    res.send("Hello World !!! Muhammad Waqar Khan Server File")
})


app.get('/name',(req,res)=>{
    res.send("My name is Waqar Khan")
})

app.post('/api/student',(req,res)=>{
    if(!req.body.email){
        req.send("Email are not Found")
        return req.staus(400)
    }
    const newUser={
        id:students.length+1,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
    }
    console.log(req.body)
    students.push(newUser)
    res.json(newUser)
})


app.put('/api/student/:id',(req,res)=>{
    let id =req.params.id
    let first_name=req.body.first_name
    let last_name=req.body.last_name
    let email=req.body.email

    let index=students.findIndex(student=>{
        return (student.id=== Number.parseInt(id))
    })

    let std=students[index]
    std.first_name=first_name
    std.last_name=last_name
    std.email=email

    res.json(std)


})

app.delete('/api/student/:id',(req,res)=>{
    let id =req.params.id
    let first_name=req.body.first_name
    let last_name=req.body.last_name
    let email=req.body.email

    let index=students.findIndex(student=>{
        return (student.id=== Number.parseInt(id))
    })
    let std=students[index]    
    std.splice(0,std.length)
    res.json(std)
})

app.get('/api/student',(req,res)=>{
    res.json(students)
    
})






app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
});