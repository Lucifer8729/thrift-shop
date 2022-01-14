import React from "react";
import { useNavigate } from "react-router-dom";

import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const ShopCard = ({ img, title, location, timeLeft, id }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/shop/${id}`);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" height="240" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="#03045e">
          {title}
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <Grid container direction="row" alignItems="center">
            <LocationOnIcon sx={{ fontSize: "large", mr: 1 }} />
            {location}
          </Grid>
        </Typography>
        <Typography variant="body2" component="div" color="text.secondary">
          <Grid container direction="row" alignItems="center">
            <AccessTimeIcon sx={{ fontSize: "large", mr: 1 }} />
            {timeLeft}
          </Grid>
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: -1 }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "#03045e",
            ml: 1,
            mb: 1,
            ":hover": {
              backgroundColor: "#0078a9",
            },
          }}
          onClick={handleClick}
        >
          enter bid
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopCard;
