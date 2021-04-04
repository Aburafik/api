const express=require("express");
const app=express()
const importData=require("./mydata.json");
let port=process.env.PORT||3000;



app.get("/",(req,res)=>{
    res.send("Welcome to my app")

})

app.get("/mydata",(req,res)=>{
    res.send(importData);
})

app.listen(port,()=>{
    console.log(`Listening to server at http://localhost:${port}`)
})