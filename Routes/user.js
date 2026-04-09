const express = require("express");
const env = require("dotenv").config();
//const app= express();
const router = express.Router();
const { GoogleGenAI } = require("@google/genai");
//console.log(process.env.GEMINI_API_KEY);
//const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({});
router.get("/students/:type", async (req, res, next) => {
  try {
    let { type } = req.params;
    console.log(type);
    res.send({ message: "route is working fine" });
  } catch (err) {
    console.log(err);
  }
});

router.post("/user/query", async (req, res, next) => {
  
  let { query } = req.body;
  console.log(query);
  console.log(typeof query);

  try {
    async function textgeneration() {
        let response=null;
      if (query != null) {
       response = await ai.models.generateContent({
          model: "gemini-3-flash-preview",
          contents: query,
        });
        //const result = await model.generateContent(query);
        //response =result.response;
        console.log(response.text); // Note the function call .text()
        return response.text;
      }
    }

   let result = await textgeneration();
    if (result == null) {
      res.send({ message: "something went wrong with the generating text" });
    } else {
      res.send({ message: result });
    }
  } catch (err) {
    res.send({ message: "you got the error " + err });
  }
});

module.exports = router;
