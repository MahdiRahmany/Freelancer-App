import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";
import toast from "react-hot-toast";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized, isVerified } =
    useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/");
    if (!isVerified && !isLoading)
      navigate(toast.error("پروفایل شما هنوز تایید نشده است"), "/");
    if (!isAuthorized && !isLoading)
      navigate("/note-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate, isVerified]);

  if (isLoading)
    return (
      <div className="flex items-center justify-between h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  return children;
}
export default ProtectedRoute;
