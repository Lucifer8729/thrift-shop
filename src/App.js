import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StoreIcon from "@mui/icons-material/Store";
import SellIcon from "@mui/icons-material/Sell";
import HistoryIcon from "@mui/icons-material/History";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import Shop from "./Pages/Shop/Shop";
import Sell from "./Pages/Sell/Sell";
import History from "./Pages/History/History";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            open={open}
            sx={{ backgroundColor: "#03045e" }}
          >
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: "36px",
                  ...(open && { display: "none" }),
                  pl: 1.5,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Thrift Shop
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <List sx={{ position: "fixed", left: 0 }}>
                <ListItem>
                  <ListItemIcon sx={{ pl: 1 }}>
                    <AccountCircleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Username" />
                </ListItem>
              </List>

              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#03045e" : "#424242",
                    textDecoration: "none",
                  };
                }}
                to={`/shop`}
              >
                <ListItem button>
                  <ListItemIcon sx={{ pl: 1 }}>
                    <StoreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Shop" />
                </ListItem>
              </NavLink>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#03045e" : "#424242",
                    textDecoration: "none",
                  };
                }}
                to={`/sell`}
              >
                <ListItem button>
                  <ListItemIcon sx={{ pl: 1 }}>
                    <SellIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sell" />
                </ListItem>
              </NavLink>
            </List>
            <Divider />
            <List>
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "#03045e" : "#424242",
                    textDecoration: "none",
                  };
                }}
                to={`/history`}
              >
                <ListItem button>
                  <ListItemIcon sx={{ pl: 1 }}>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="History" />
                </ListItem>
              </NavLink>
            </List>
            <ListItem
              button
              sx={{ position: "absolute", bottom: 0, width: "inherit" }}
            >
              <ListItemIcon sx={{ pl: 1 }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              pt: 10,
              backgroundColor: "#e8eaf6",
              minHeight: "100vh",
              width: "100%",
            }}
          >
            {/* <DrawerHeader /> */}
            <Routes>
              <Route path="/signIn" element={<SignInSignUp />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/sell" element={<Sell />} />
              <Route path="/history" element={<History />} />
            </Routes>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
