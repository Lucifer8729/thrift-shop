import React from "react";
import { Grid } from "@mui/material";

import ShopCard from "../../Components/ShopCard/ShopCard";
import { SAMPLE_DATA } from "./SAMPLE_DATA.js";
import { firestore } from "../../firebase/firebase.utils"
import { collection, getDocs } from 'firebase/firestore'

const Shop = ({ isLoggedIn }) => {
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
              isLoggedIn={isLoggedIn}
              img={users.img}
              title={user.Product_Name}
              location={user.Location}
              timeLeft={user.Time}
              currBid={user.Starting_Price}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Shop;
