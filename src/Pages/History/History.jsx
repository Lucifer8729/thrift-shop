import React from "react";
import { Grid } from "@mui/material";

import HistoryCard from "../../Components/HistoryCard/HistoryCard";
import { SAMPLE_DATA } from "./SAMPLE_DATA";

const History = () => {
  return (
    <>
      <>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          {SAMPLE_DATA.map((data) => (
            <Grid item>
              <HistoryCard
                img={data.img}
                title={data.title}
                location={data.location}
                timeLeft={data.timeLeft}
                currBid={data.currBid}
              />
            </Grid>
          ))}
        </Grid>
      </>
    </>
  );
};

export default History;
