import { userState } from "./context/userContext";
import { Navigate, Outlet } from "react-router-dom";

const IsAuthenticated = () => {
  const user = userState();

  return <>{user?.user?.username ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default IsAuthenticated;
