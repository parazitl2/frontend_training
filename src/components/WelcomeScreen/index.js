import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

const WelcomeScreen = ({ handleClick }) => {
  return (
    <div className='welcomeScreen'>
      <Typography variant="h2" component="h1" gutterBottom>Welcome to the Buharest application!</Typography>
      <Typography variant="h4" component="div" gutterBottom>It is a pleasure to meet you here.</Typography>
      <Typography variant="h5" component="div" gutterBottom>Come on, let me introduce it to you!</Typography>
      <Button variant="outlined" onClick={handleClick}>Let&apos;s go!</Button>
    </div>
  );
};

WelcomeScreen.propTypes = {
  handleClick: PropTypes.func
};

export default WelcomeScreen;
