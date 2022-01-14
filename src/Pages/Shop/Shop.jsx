import React from "react";
import { Grid } from "@mui/material";

import ShopCard from "../../Components/ShopCard/ShopCard";
import { SAMPLE_DATA } from "./SAMPLE_DATA.js";

const Shop = ({ isLoggedIn }) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {SAMPLE_DATA.map((data, i) => (
          <Grid item key={i}>
            <ShopCard
              isLoggedIn={isLoggedIn}
              img={data.img}
              title={data.title}
              location={data.location}
              timeLeft={data.timeLeft}
              id={data.id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
