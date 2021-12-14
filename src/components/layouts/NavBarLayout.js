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

export default NavBarLayout;