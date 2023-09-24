import React from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";
import logo from "../images/logo.svg";

const Logo = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Box display="flex" justifyContent="center" alignItems="center">
            <img
              src={logo}
              alt="Logo"
            />
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Logo;
