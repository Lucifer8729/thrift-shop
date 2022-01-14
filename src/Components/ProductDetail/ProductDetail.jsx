import React from "react";

import Box from "@mui/material/Box";
import { Typography, Grid } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import img from "../../Assets/chair.png";

function createData(type, value) {
  return { type, value };
}

const rows1 = [
  createData("Name", "Tannay Kumar"),
  createData("Contact", "8193742313"),
  createData("Email", "tanaykmr@gmail.com"),
];
const rows2 = [
  createData("Product Name", "Set of 2 chairs"),
  createData("Product ID", "314eda32w2"),
  createData("Selling Price", "$ 321.00"),
  createData("Location", "New Delhi"),
  createData("Status", "Picked"),
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#e8eaf6",
  borderRadius: "5px",
  boxShadow: 24,
  // p: 4,
  overflowY: "auto",
  maxHeight: "80vh",
};

const ProductDetail = ({ close }) => {
  return (
    <Box sx={style}>
      <Grid container>
        <Grid
          item
          xs={12}
          lg={6}
          sx={{ backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        >
          <img
            style={{ maxWidth: "100%", height: "100%" }}
            src={img}
            alt="product"
          />
        </Grid>
        <Grid item xs={12} lg={6} sx={{ p: 4 }}>
          <IconButton
            sx={{ position: "absolute", right: 15, top: 15 }}
            onClick={close}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" sx={{ mb: 2, color: "#03045e" }}>
            Buyer Details :
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                {rows1.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell>{row.type}</TableCell>
                    <TableCell align="right" sx={{ color: "#0078a9" }}>
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <Typography variant="h5" sx={{ mb: 2, color: "#03045e" }}>
            Product Details :
          </Typography>
          <TableContainer component={Paper}>
            <Table size="small">
              <TableBody>
                {rows2.map((row) => (
                  <TableRow key={row.type}>
                    <TableCell>{row.type}</TableCell>
                    <TableCell align="right" sx={{ color: "#0078a9" }}>
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;
