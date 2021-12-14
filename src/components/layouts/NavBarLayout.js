import PropTypes from 'prop-types';
import React from 'react';
import { Outlet } from 'react-router';

import NavBar from '../NavBar';

const NavBarLayout = ({ isAuth, currentUser }) => {
  return (
    <>
      <NavBar isAuth={isAuth} currentUser={currentUser} />
      <Outlet />
    </>
  );
};

NavBarLayout.propTypes = {
  isAuth: PropTypes.bool.required,
  currentUser: PropTypes.object,
};

export default NavBarLayout;
