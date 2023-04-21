import fetch from "node-fetch";
import { markdownToJson } from "./util.js";
import express from "express";

const app = express();

async function getQuestionsFromAPI() {
   try {
      const data = await fetch(
         "https://api.github.com/repos/lydiahallie/javascript-questions/readme"
      ).then((res) => res.json());

      const questions = Buffer.from(data.content, "base64").toString("utf-8");

      return questions;
   } catch (err) {
      console.error(err);
   }
}

app.get("/api/questions", async (req, res) => {
   try {
      const questionsRaw = await getQuestionsFromAPI();
      const questionsRawArray = questionsRaw.split("###### ");
      questionsRawArray.shift();

      const questions = questionsRawArray.map(markdownToJson);

      res.json(questions);
   } catch (err) {
      console.error(err);
   }
});

app.listen(3000, () => {
   console.log(
      "Server started port 3000, visit docs here: http://localhost:3000/api/docs"
   );
});
