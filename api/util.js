import { promises as fs } from "fs";

export async function writeToFile(filePath, data) {
   try {
      await fs.writeFile(filePath, data);
   } catch (err) {
      console.error(err);
   }
}

export function markdownToJson(md) {
   const questionRegex = /^\d+\.\s(.+)\n/;
   const codeRegex = /```(?:javascript|html)\n([\s\S]+?)```/;
   const optionsRegex = /-\s(.+)\n/g;
   const correctAnswerRegex = /#### Answer: ([A-D])/;
   const explanationRegex = /#### Answer: [A-D]\n\n([\s\S]+)$/;

   const matchQuestion = md.match(questionRegex);
   const matchCode = md.match(codeRegex);
   const matchOptions = [...md.matchAll(optionsRegex)].map((match) => match[1]);
   const matchCorrectAnswer = md.match(correctAnswerRegex);
   const matchExplanation = md.match(explanationRegex);

   const json = {
      question: matchQuestion[1],
      code: matchCode ? matchCode[1] : null,
      options: matchOptions,
      correctAnswer: matchCorrectAnswer[1],
      explanation: matchExplanation[1],
   };

   return json;
}
