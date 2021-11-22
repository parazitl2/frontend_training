import React from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';

function NavBar({ username }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Buharest
        </Typography>
        { username 
          && <Typography>{username}</Typography>
        }
        <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          {username ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

NavBar.defaultProps = {
  username: "Stranger",
};

NavBar.propTypes = {
  username: PropTypes.string,
};

export default NavBar;