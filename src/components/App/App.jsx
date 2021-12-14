import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import CocktailsListContainer from '../../containers/CocktailsList';
import NavBarLayout from '../layouts/NavBarLayout';
import WelcomeScreenContainer from '../../containers/WelcomeScreenContainer';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { selectIsInitialized } from '../../ducks/app/selectors';
import Loader from 'react-loader-spinner';
import RequireAuth from '../layouts/RequireAuth';
import { selectCurrentUser, selectIsAuth } from '../../ducks/user/selectors';
import CatsPageContainer from '../../containers/CatsPage';

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
                  : <Login />}/>
                <Route path='/cocktails' element={<CocktailsListContainer />}/>
                <Route path='/cats' element={<CatsPageContainer />}/>
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
