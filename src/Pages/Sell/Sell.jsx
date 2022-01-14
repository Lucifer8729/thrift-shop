import React from "react";
import { useNavigate } from "react-router-dom";

const Sell = ({ isLoggedIn }) => {
  const navigate = useNavigate;

  const redirect = () => {
    navigate("/signIn");
  };

  return <>{!isLoggedIn ? <h1>sign first</h1> : <h1>Sell</h1>}</>;
};

export default Sell;
