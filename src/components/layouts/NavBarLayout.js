import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router';

import NavBar from '../NavBar/index';

const NavBarLayout = ({ isAuth, currentUser }) => {
  return (
    <>
      <NavBar isAuth={isAuth} currentUser={currentUser} />
      <Outlet />
    </>
  );
};

NavBarLayout.propTypes = {
  isAuth: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default NavBarLayout;
