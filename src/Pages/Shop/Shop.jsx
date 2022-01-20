import React from "react";
import { Grid } from "@mui/material";

import ShopCard from "../../Components/ShopCard/ShopCard";
import { SAMPLE_DATA } from "./SAMPLE_DATA.js";
import { firestore } from "../../firebase/firebase.utils"
import { collection, getDocs } from 'firebase/firestore'

const Shop = () => {
  const [users, setUsers] = React.useState([]);
  const usersCollectionRef = collection(firestore,"stuff")
  React.useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(),id: doc.id})));
      console.log(data);
    };
    getUsers();
  }, []);
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
      >
        {users.map((user, i) => (
          <Grid item key={i}>
            <ShopCard
              img={user.Image}
              title={user.ProductName}
              location={user.Location}
              timeLeft={user.TimeLeft + " days"}
              currBid={user.StartingPrice}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
