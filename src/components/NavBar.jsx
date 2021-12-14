import React, { useCallback } from 'react';
import {
  AppBar,
  // IconButton,
  Toolbar,
  Button,
  Typography,
  Box
} from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { CATS_ROUTE, COCKTAILS_ROUTE } from '../constants/common';

function NavBar ({ isAuth, currentUser }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleCocktails = useCallback(() => {
    navigate('/cocktails');
  }, [navigate]);

  const handleCats = useCallback(() => {
    navigate('/cats');
  }, [navigate]);

  return (
    <AppBar position="static">
      <Toolbar>
        {/* <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton> */}
        <Typography
          edge='start'
          variant="h6"
          component="div"
          // sx={{ flexGrow: 1 }}
          >
          Buharest
        </Typography>
        <Typography
          component="div"
          sx={{ flexGrow: 1 }}
          >
        </Typography>
        { isAuth &&
          <Box>
            <Button disabled={location.pathname === COCKTAILS_ROUTE} color="inherit" onClick={handleCocktails}>
              Cocktails
            </Button>
            <Button disabled={location.pathname === CATS_ROUTE} color="inherit" onClick={handleCats}>
              Cats
            </Button>
          </Box>
        }
        { currentUser &&
          <Typography>{currentUser.name}</Typography>
        }
        <Button color="inherit" href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
          {isAuth ? 'Logout' : 'Login'}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

NavBar.defaultProps = {
  isAuth: false,
  currentUser: { name: 'Stranger' },
};

NavBar.propTypes = {
  isAuth: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default React.memo(NavBar);
