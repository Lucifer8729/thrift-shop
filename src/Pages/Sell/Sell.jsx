import React from "react";

import { Grid, Typography, TextField, Button } from "@mui/material";

import placeholderImage from "../../Assets/placeholder.png";

const Sell = () => {
  const [image, setImage] = React.useState(placeholderImage);
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
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
            required
            label="Seller's Name"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField label="Seller's Email" variant="filled" sx={{ mt: 2 }} />

          <TextField label="Mobile Number" variant="filled" sx={{ mt: 2 }} />

          <TextField
            label="Auction Duration"
            type="number"
            variant="filled"
            sx={{ mt: 2 }}
          />

          <TextField label="Product Name" variant="filled" sx={{ mt: 2 }} />

          <TextField
            required
            label="Starting Price"
            variant="filled"
            sx={{ mt: 2, mb: 8 }}
          />

          <Button
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
                src={image}
                width="100%"
                height="90%"
                alt="product preview"
              />
              <input type="file" accept="Image*" onChange={handleChange} />
            </Grid>
            <Grid item sx={{ height: "40%" }}>
              <TextField
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
