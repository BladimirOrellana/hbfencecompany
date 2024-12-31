import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get the current route
  return (
    <AppBar
      position="absolute" // Ensures the navbar is on top of the hero section
      elevation={0} // Removes shadow for transparency
      sx={{
        backgroundColor: "transparent", // Transparent background
        color: location.pathname === "/" ? "white" : "black", // White text for contrast
      }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
          HB Fence
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <IconButton color="inherit" sx={{ marginLeft: 2 }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
