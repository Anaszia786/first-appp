const myexpress=require("express")
const mongoose=require("mongoose")

const app=myexpress();
app.use(myexpress.json());

mongoose.connect("mongodb/http://localhost:6080/login").then(function(conn){
    console.log(conn)
}).catch((err)=>{
        console.log(err)
    })
const User=require  ("./Db/database")
app.post("/login",async(req,res)=>{
console.log(req.body);
let newUser = new User()
    newUser.email = req.body.email
    newUser.password = req.body.password
    console.log(req.body);
    await newUser.save()
    res.end("ok g")

// res.json("hello")
})
app.listen(6080,()=>{
    console.log("server is running")
})