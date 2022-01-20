import React from "react";
import { Grid } from "@mui/material";

import HistoryCard from "../../Components/HistoryCard/HistoryCard";

import { firestore } from "../../firebase/firebase.utils"
import { collection, getDocs } from 'firebase/firestore'

const History = () => {
  const [users, setUsers] = React.useState([]);
  const usersCollectionRef = collection(firestore,"history")
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
              <HistoryCard
                img={user.Image}
                title={user.ProductName}
                location={user.Location}
                timeLeft={user.TimeLeft + " days"}
                currBid={"₹" + user.StartingPrice}
              />
            </Grid>
          ))}
        </Grid>
      </>
    </>
  );
};

export default History;
