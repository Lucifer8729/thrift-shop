import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const PrivateRoutes = ({ children }) => {
  return auth.currentUser ? children : <Navigate to="/signIn" />;
};

export default PrivateRoutes;
