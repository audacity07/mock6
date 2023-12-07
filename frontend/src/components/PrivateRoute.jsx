import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  // console.log(isAuth);

  if (isAuth === false) {
    alert("Login to check blogs");
    return <Navigate to="/login" />;
  }

  return children;
}
