import React, { useState } from "react";
import { firestore, storage } from "../../firebase/firebase.utils";

import { Grid, Typography, TextField, Button } from "@mui/material";

import placeholderImage from "../../Assets/placeholder.png";

const Sell = () => {
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [sellerMobile, setSellerMobile] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [productName, setProductName] = useState("");
  const [startingPrice, setStartingPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");
  const [location, setLocation] = useState("India");

  const [image, setImage] = React.useState({
    imageAsBlob: placeholderImage,
    imageAsFile: "",
  });

  const handleChange = (e) => {
    console.log({
      imageAsBlob: URL.createObjectURL(e.target.files[0]),
      imageAsFile: e.target.files[0],
    });
    setImage({
      imageAsBlob: URL.createObjectURL(e.target.files[0]),
      imageAsFile: e.target.files[0],
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(image);
    const uploadTask = storage
      .ref(`product-images/${image.imageAsFile.name}`)
      .put(image.imageAsFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
      console.error,
      () => {
        storage
          .ref("product-images")
          .child(image.imageAsFile.name)
          .getDownloadURL()
          .then((url) => {
            firestore.collection("stuff").add({
              SellerName: sellerName,
              SellerEmail: sellerEmail,
              SellerMobile: sellerMobile,
              TimeLeft: timeLeft,
              ProductName: productName,
              StartingPrice: startingPrice,
              ProductDesc: productDesc,
              Location: location,
              Image: url,
            });
          });
      }
    );
  };

  return (
    <>
      <Grid container sx={{ height: "100%", backgroundColor: "white" }}>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "top",
            flexDirection: "column",
            alignItems: "left",
            p: 4,
          }}
        >
          <Typography
            variant="h4"
            component="div"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Product Details :
          </Typography>

          <TextField
            onChange={(event) => {
              setSellerName(event.target.value);
            }}
            required
            label="Seller's Name"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setSellerEmail(event.target.value);
            }}
            label="Seller's Email"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setSellerMobile(event.target.value);
            }}
            type="number"
            label="Mobile Number"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setLocation(event.target.value);
            }}
            label="Location"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setTimeLeft(event.target.value);
            }}
            label="Auction Duration"
            type="number"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setProductName(event.target.value);
            }}
            label="Product Name"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField
            onChange={(event) => {
              setStartingPrice(event.target.value);
            }}
            required
            label="Starting Price"
            type="number"
            variant="filled"
            sx={{ mt: 2, mb: 8 }}
          />

          <Button
            onClick={handleUpload}
            sx={{ position: "absolute", bottom: 0, mb: 4 }}
            variant="contained"
            id="btn"
          >
            SUBMIT DETAILS
          </Button>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            sx={{ height: "100%", p: 4 }}
          >
            <Grid item sx={{ height: "60%" }}>
              <img
                src={image.imageAsBlob}
                width="100%"
                height="90%"
                alt="product preview"
              />
              <input
                type="file"
                id="file"
                accept="Image*"
                onChange={handleChange}
              />
            </Grid>
            <Grid item sx={{ height: "40%" }}>
              <TextField
                onChange={(event) => {
                  setProductDesc(event.target.value);
                }}
                label="Product Description"
                multiline
                rows={8}
                sx={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Sell;
