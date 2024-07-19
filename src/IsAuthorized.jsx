import { userState } from "./context/userContext";
import { Navigate } from "react-router-dom";

export default (WrappedComponent) => {
  return (props) => {
    const user = userState();

    return (
      <>{user?.user?.isAdmin ? <WrappedComponent /> : <Navigate to="/" />}</>
    );
  };
};
