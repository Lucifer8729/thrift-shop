import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import placeholder from './components/assets/placeholder.png';

function App() {
  const [image,setimage]= React.useState(placeholder)
  const handleChange = (e) => {
    setimage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div id="main">
    <h2>Product Details</h2>
    </div>
    <div>
      <TextField
        required
        id="outlined-name"
        label="Seller's Name"
        defaultValue="  "
      />
      
      <TextField
        id="outlined-email"
        label="Seller's Email"
        defaultValue="  "
        
      />
     
      <TextField
        id="outlined-number"
        label="Mobile Number"
        defaultValue="  "
      />
       
       <div>
         <h3>Product Image</h3>
         <input type="file"  accept="Image*" onChange={handleChange}/> 
       </div>
       <div id="prev">
       <img src={image} width="25%" height="25%"/>
       </div>
       <br/>
      <TextField
        id="filled-auction"
        label="Auction Duration"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
       
      />
     
      <TextField
        id="filled-pname"
        label="Product Name"
        defaultValue=" "
      />
      
      <TextField
        id="filleddesc"
        label="Product Description"
        defaultValue="eg product"
      />
    </div>
    <div>
      <TextField
        required
        id="standard-sprice"
        label="Starting Price"
        defaultValue="eg 100 USD"
      />
      <br/>
      <Button variant="contained" id="btn">SUBMIT DETAILS</Button>
    </div>
  </Box>

        

  );
}

export default App;
