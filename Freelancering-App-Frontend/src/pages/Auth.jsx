import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import AuthContainer from "../features/authentication/authContainer";

const queryClient = new QueryClient();

function Auth() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="flex justify-center pt-10">
        <AuthContainer />
      </div>
    </QueryClientProvider>
  );
}
export default Auth;
