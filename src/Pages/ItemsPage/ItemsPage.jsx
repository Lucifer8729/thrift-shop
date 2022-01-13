import React from "react";

import { Box, Grid, Tabs, Tab, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TextField from "@mui/material/TextField";

import { SAMPLE_DATA } from "./SAMPLE_DATA";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ItemsPage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          md={6}
          lg={5}
          sx={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            overflow: "auto",
          }}
        >
          <img
            style={{ maxWidth: "100%" }}
            src={SAMPLE_DATA.itemImage}
            alt="product"
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ ml: 4 }}>
          <Typography gutterBottom variant="h3" component="div" color="#03045e">
            {SAMPLE_DATA.title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <Grid container direction="row" alignItems="center">
              <LocationOnIcon sx={{ fontSize: "xl", mr: 1 }} />
              {SAMPLE_DATA.location}
            </Grid>
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <Grid container direction="row" alignItems="center">
              <AccessTimeIcon sx={{ fontSize: "xl", mr: 1 }} />
              {SAMPLE_DATA.timeLeft}
            </Grid>
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <Grid container direction="row" alignItems="center">
              <AttachMoneyIcon sx={{ fontSize: "xl", mr: 1 }} />
              {SAMPLE_DATA.currentBid}
            </Grid>
          </Typography>
          <TextField
            label="Your Bid"
            type="number"
            sx={{ mt: 3, width: 200 }}
          />
          <br />
          <Button
            variant="contained"
            sx={{
              mt: 1,
              width: 200,
              backgroundColor: "#03045e",
              ":hover": {
                backgroundColor: "#0078a9",
              },
            }}
          >
            Place bid
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#0078a9",
                },
              }}
            >
              <Tab label="Description" />
              <Tab label="Location" />
              <Tab label="About Seller" />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            {SAMPLE_DATA.tab1}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {SAMPLE_DATA.tab2}
          </TabPanel>
          <TabPanel value={value} index={2}>
            {SAMPLE_DATA.tab3}
          </TabPanel>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemsPage;
