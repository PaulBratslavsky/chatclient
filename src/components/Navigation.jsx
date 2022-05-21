import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from '@mui/material/Typography';
import { Link as MuiLink } from '@mui/material';

import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <AppBar>
      <Toolbar sx={{ flexWrap: 'wrap'}}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Chatbot
          </Typography>
          <MuiLink component={Link} to="/" color="inherit"  sx={{ my: 1, mx: 1.5 }}>
            Home
          </MuiLink>
          <MuiLink component={Link} to="/about" color="inherit"  sx={{ my: 1, mx: 1.5 }}>
            About
          </MuiLink>
          <MuiLink component={Link} to="/shop" color="inherit"  sx={{ my: 1, mx: 1.5 }}>
            About
          </MuiLink>
      </Toolbar>
    </AppBar>
  );
}
