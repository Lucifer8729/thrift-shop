import React from "react";
import { useNavigate } from "react-router-dom";

const Sell = () => {
  const navigate = useNavigate;

  const redirect = () => {
    navigate("/signIn");
  };

  return (
    <>
      <h1>Sell</h1>
    </>
  );
};

export default Sell;
