import { useQuestions } from "../hooks/useQuestions";

export const Questions = () => {
   const { data: questions, isError, isLoading } = useQuestions();

   if (isError) return `Error! Couldn't load the questions`;
   if (isLoading) return `Loading...`;

   return <div>{JSON.stringify(questions)}</div>;
};
