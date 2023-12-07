import { Route, Routes } from "react-router-dom";
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import Blog from "../pages/Blog";
import PrivateRoute from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/blogs"
        element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
