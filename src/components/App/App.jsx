import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';

import CatsPageContainer from '../../containers/CatsPage';
import CocktailsListContainer from '../../containers/CocktailsList';
import LoginContainer from '../../containers/Login';
import WelcomeScreenContainer from '../../containers/WelcomeScreenContainer';
import { selectIsInitialized } from '../../ducks/app/selectors';
import { selectCurrentUser, selectIsAuth } from '../../ducks/user/selectors';
import NavBarLayout from '../layouts/NavBarLayout';
import RequireAuth from '../layouts/RequireAuth';

function App () {
  const isInitialized = useSelector(selectIsInitialized);
  const isAuth = useSelector(selectIsAuth);
  const currentUser = useSelector(selectCurrentUser);

  return (
    <div className="App">
      { isInitialized
        ? <Routes>
            <Route element={<NavBarLayout isAuth={isAuth} currentUser={currentUser} />}>
              <Route path='/' element={<WelcomeScreenContainer />}/>
              <Route path='/login' element={isAuth
                ? <Navigate to='/' />
                : <LoginContainer />}
              />

              <Route element={<RequireAuth />}>
                <Route path='/cocktails' element={<CocktailsListContainer />}/>
                <Route path='/cats' element={<CatsPageContainer />}/>
              </Route>

              <Route path='*' element={
                <RequireAuth>
                  <Navigate to="/" />
                </RequireAuth>
              }/>
            </Route>
          </Routes>
        : <Loader type='Puff' color='#11da4F' height={100} width={100} timeout={3000}/> }
      {/* <Counter /> */}
    </div>
  );
}

export default App;
