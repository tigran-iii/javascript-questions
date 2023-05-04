import { useQuery } from "@tanstack/react-query";

export const useQuestions = () =>
   useQuery({
      queryKey: ["questions"],
      queryFn: () => fetch("/api/questions.js").then((res) => res.json()),
   });
