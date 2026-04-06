const express= require("express");
const app= express();
const path=require("path");
const user= require("./Routes/user");
//const process= require("process");

// app.get("/hello",(req,res,next)=>{
//     console.log("hello route are working");
// })

app.use(user);

const PORT=8080 || process.env.PORT;
const name= process.env.VIKAS
app.listen(PORT,()=>{
console.log("i am listining at the port "+PORT)
console.log(name);
})