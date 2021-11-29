import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar';

const NavBarLayout = () => {
  return (
    <>
      <NavBar username="Vaso"/>
      <Outlet />
    </>
  );
};

export default NavBarLayout;