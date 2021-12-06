import React, { useCallback } from 'react';
import { useNavigate } from 'react-router';
import WelcomeScreen from '../../components/WelcomeScreen';

const WelcomeScreenContainer = () => {
  const navigate = useNavigate();

  const navigateToLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <WelcomeScreen handleClick={navigateToLogin} />
  );
};

export default WelcomeScreenContainer;