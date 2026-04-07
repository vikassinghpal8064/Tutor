const express= require("express");
const app= express();
const path=require("path");
const user= require("./Routes/user");
const env= require('dotenv').config();

// Ensure you have installed: npm install @google/genai
// Ensure you have installed: npm install @google/generative-ai
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function textgeneration() {
  // getGenerativeModel is the standard method for this SDK
  const model = genAI.getGenerativeModel({ model: "gemini-3-flash-preview" });

  const result = await model.generateContent("Explain AI in 5 words");
  const response = await result.response;
  console.log(response.text()); // Note the function call .text()
}

textgeneration();


const PORT= process.env.PORT || 8080;

app.listen(PORT,()=>{
console.log("i am listining at the port "+PORT)
//console.log(name);
})