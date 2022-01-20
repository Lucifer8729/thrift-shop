import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { firestore } from "../../firebase/firebase.utils";
import {
  collection,
} from "firebase/firestore";

import { Typography, TextField, Box, Button, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";

const SignUp = ({ setSignIn, signInWithGoogle }) => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  
  

  const register = async () => {
      
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);

    } catch (error) {
      console.log(error.message);
    }
    firestore.collection("users").add({
      Name: name, 
      Phone: phone,
      Email: registerEmail 
    });
  };

  
 
  return auth.currentUser ? (
    <Navigate to="/shop" />
  ) : (
    <Box>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        Register
      </Typography>

      <TextField
        required
        variant="standard"
        placeholder="Name"
        sx={{ width: "45ch", mt: 0 }}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      <TextField
        required
        variant="standard"
        placeholder="Email Id"
        sx={{ width: "45ch", mt: 2 }}
        onChange={(event) => {
          setRegisterEmail(event.target.value);
        }}
      />
      <br />
      <TextField
        variant="standard"
        placeholder="Phone Number"
        sx={{ width: "45ch", mt: 2 }}
        onChange={(event) => {
          setPhone(event.target.value);
        }}
      />
      <br />
      <TextField
        variant="standard"
        type="password"
        placeholder="Password"
        sx={{ width: "45ch", mt: 2 }}
        onChange={(event) => {
          setRegisterPassword(event.target.value);
        }}
      />
      <br />
      <TextField
        variant="standard"
        type="password"
        placeholder="Confirm Password"
        sx={{ width: "45ch", mt: 2 }}
      />
      <br />
      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "#03045e",
          width: "25rem",
        }}
        onClick={register}
      >
        Register
      </Button>

      <Typography sx={{ mt: 2, mb: 2, textAlign: "center" }}>OR</Typography>
      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        sx={{
          width: "25rem",
        }}
        onClick={signInWithGoogle}
      >
        Register with Google
      </Button>
      <Divider sx={{ mt: 6, mb: 4 }} />
      <Typography gutterBottom>
        Do you want to Login?
        <Button sx={{ color: "#03045e" }} onClick={() => setSignIn(true)}>
          Click here
        </Button>
      </Typography>
    </Box>
  );
};

export default SignUp;
