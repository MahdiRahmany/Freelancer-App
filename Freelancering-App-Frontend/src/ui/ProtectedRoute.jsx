import useAuthorize from "../features/authentication/useAuthorize";

function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading, isAuthorized } = useAuthorize();
  return children;
}
export default ProtectedRoute;
