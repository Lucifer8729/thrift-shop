import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#03045e',
      contrastText: '#fff',
    },
  },
});

class Login extends React.Component
{
  constructor()
  {
    super()
  }

  render()
  {
    return(
      <div className="main-back">
        <div className='main-title'>
            <h1 className='title'>Thrift-Shop</h1>
            <h3 className='tag-line'>Buying and Selling Simplified!</h3>
        </div>
        <div className="block">
          <ul className='main-list'>
            <li id="first">
              <h1>Login</h1>
            </li>
            <li id="second">
            <h2>Email Address</h2>
            <TextField variant="standard" id="email" placeholder='Email Id' autoFocus='true' sx={{ width: '45ch' }} />
            </li>
            <li id="third">
              <h2>Password</h2>
              <TextField variant="standard" id="password" placeholder='password' sx={{ width: '45ch' }} />
            </li>
            <li id="fourth">
            <ThemeProvider theme={theme}>
            <Button variant="contained" color='neutral'>Login</Button>
            </ThemeProvider>
            </li>
            <li id="fifth">
              <h3>OR</h3>
            </li>
            <li id="sixth">
            <ThemeProvider theme={theme}>
            <Button variant="contained" color='neutral'>Login with Google</Button>
            </ThemeProvider>
            </li>
            <li id="seventh">
              <h4>Do you want to Sign up? <span id="link">Click here</span></h4>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}



export default Login;