import fetch from "node-fetch";
import { markdownToJson } from "./util.js";

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

const questionsRaw = await getQuestionsFromAPI();
const questionsRawArray = questionsRaw.split("###### ");
questionsRawArray.shift();

const questions = questionsRawArray.map((q, idx) => {
   try {
      return markdownToJson(q);
   } catch (error) {
      console.error(error);
   }
});

console.log(questions);
