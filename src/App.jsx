import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Questions } from "./components/Questions";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export const App = () => {
   return (
      <QueryClientProvider client={queryClient}>
         <ReactQueryDevtools position="top-right" />
         <Questions />
      </QueryClientProvider>
   );
};
