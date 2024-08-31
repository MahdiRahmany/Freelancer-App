import { useNavigate } from "react-router-dom";
import useAuthorize from "../features/authentication/useAuthorize";
import { useEffect } from "react";
import Loading from "./Loading";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/");
    if (!isAuthorized && !isLoading)
      navigate("/note-access", { replace: true });
  }, [isAuthenticated, isAuthorized, isLoading, navigate]);

  if (isLoading)
    return (
      <div className="flex items-center justify-between h-screen bg-secondary-100">
        <Loading />
      </div>
    );
  return children;
}
export default ProtectedRoute;
