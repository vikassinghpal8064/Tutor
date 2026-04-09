const express= require("express");
const app= express();
const path=require("path");
const user= require("./Routes/user");
const env= require('dotenv').config();


const PORT= process.env.PORT || 8080;
app.use(express.json());// its a middle ware to parse json;
app.use(express.urlencoded({extended:true})); //its a middle ware for form data
app.use(user);


app.listen(PORT,()=>{
console.log("i am listining at the port "+PORT)
//console.log(name);
})