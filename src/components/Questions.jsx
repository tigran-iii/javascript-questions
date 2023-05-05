import { useQuestions } from "../hooks/useQuestions";
import Markdown from "react-markdown";

export const Questions = () => {
   const { data: questions, isError, isLoading } = useQuestions();

   if (isError) return `Error! Couldn't load the questions`;
   if (isLoading) return `Loading...`;

   return (
      <div>
         {questions.map(({ id, question, code, options, explanation }) => (
            <div className="" key={id}>
               <h2>
                  <Markdown>{question}</Markdown>
               </h2>
               <pre>
                  <Markdown >{code}</Markdown>
               </pre>
               {/* TODO add bullet points for the list */}
               <ul className="list-disc">
                  {options.map((option, idx) => (
                     <li key={idx}>
                        <Markdown>{option}</Markdown>
                     </li>
                  ))}
               </ul>
               <details>
                  <summary>Answer</summary>
                  <Markdown>{explanation}</Markdown>
               </details>
            </div>
         ))}
      </div>
   );
};
