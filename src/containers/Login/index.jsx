import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Login from '../../components/Login';
import { userActions } from '../../ducks/user';

const LoginContainer = () => {
  const dispatch = useDispatch();

  const performLogin = useCallback((values) => {
    dispatch(userActions.userLoginRequest(values));
  }, [userActions.userLoginRequest, dispatch]);

  return (
    <Login performLogin={performLogin}/>
  );
};

export default React.memo(LoginContainer);
