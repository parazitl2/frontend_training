import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import CocktailsListContainer from '../../containers/cocktailsList';
import NavBarLayout from '../layouts/NavBarLayout';
import WelcomeScreenContainer from '../../containers/WelcomeScreenContainer';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { selectIsInitialized } from '../../ducks/app/selectors';
import Loader from "react-loader-spinner";
import RequireAuth from '../layouts/RequireAuth';
import { selectIsAuth } from '../../ducks/user/selectors';

function App() {
  const isInitialized = useSelector(selectIsInitialized);
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className="App">
      { isInitialized
          ? <Routes>
              <Route element={<NavBarLayout />}>
                <Route path='/' element={<WelcomeScreenContainer />}/>
                <Route path='/login' element={isAuth 
                  ? <Navigate to='/' />
                  : <Login />}/>
                <Route path='*' element={
                  <RequireAuth>
                    <Navigate to="/" />
                  </RequireAuth>
                }/>
              </Route>
              <Route path='/cocktails' element={<CocktailsListContainer />}/>
            </Routes>
          : <Loader type='Puff' color='#11da4F' height={100} width={100} timeout={3000}/> }
      {/* <Counter /> */}
    </div>
  );
}

export default App;
