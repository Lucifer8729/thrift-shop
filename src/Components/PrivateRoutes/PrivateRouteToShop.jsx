import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const PrivateRouteToShop = ({ children }) => {
  return auth.currentUser ? <Navigate to="/shop" /> : children;
};

export default PrivateRouteToShop;
