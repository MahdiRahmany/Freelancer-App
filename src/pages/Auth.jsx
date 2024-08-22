import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import CheckOTPForm from "../features/authentication/CheckOTPForm";
import SendOTPForm from "../features/authentication/sendOTPForm";
import { Toaster } from "react-hot-toast";


const queryClient =new QueryClient();



function Auth() {
  return (
    <QueryClientProvider client={queryClient}>
    <Toaster/>
      <div className="flex justify-center pt-10">
        <div className="w-full sm:max-w-sm">
          <CheckOTPForm />
          <SendOTPForm />
        </div>
      </div>
    </QueryClientProvider>
  );
}
export default Auth;
