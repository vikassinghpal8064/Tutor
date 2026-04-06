const express= require("express");
const app= express();
 const router= express.Router();



router.get("/students/:type",async(req,res,next)=>{
try{
let {type}= req.params;
console.log(type);
res.send({message:"route is working fine"});
}
catch(err){
    console.log(err);
}
})

module.exports=router;
