import React from "react";

import { Grid, Typography } from "@mui/material";

import SignIn from "../../Components/SignIn/SignIn";
import SignUp from "../../Components/SignUp/SignUp";
import {signInWithGoogle} from "../../firebase/firebase.utils"

const SignInSignUp = () => {
  const [signIn, setSignIn] = React.useState(true);
  return (
    <>
      <Grid container sx={{ height: "100%", backgroundColor: "white" }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {signIn ? (
            <SignIn setSignIn={setSignIn} signInWithGoogle={signInWithGoogle} /> 
          ) : (
            <SignUp setSignIn={setSignIn} />
          )}
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            backgroundColor: "#03045e",
            color: "white",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h1" component="div" gutterBottom sx={{ mb: 0 }}>
            Thrift-Shop
          </Typography>
          <Typography
            variant="h5"
            component="div"
            sx={{ mt: 0, fontStyle: "italic" }}
          >
            Buying and Selling Simplified!
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SignInSignUp;
