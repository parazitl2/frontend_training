import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router';
import CocktailsListContainer from '../../containers/cocktailsList';
import NavBarLayout from '../layouts/NavBarLayout';
import WelcomeScreenContainer from '../../containers/WelcomeScreenContainer';
import Login from '../Login/Login';
import { useSelector } from 'react-redux';
import { selectIsInitialized } from '../../ducks/app/selectors';
import Loader from "react-loader-spinner";

function App() {
  const isInitialized = useSelector(selectIsInitialized);

  return (
    <div className="App">
      { isInitialized
          ? <Routes>
              <Route path='/' element={<NavBarLayout />}>
                <Route index element={<WelcomeScreenContainer />}/>
                <Route path='login' element={<Login />}/>
                {/*  */}
              </Route>
              <Route path='/cocktails' element={<CocktailsListContainer />}/>
            </Routes>
          : <Loader type='Puff' color='#11da4F' height={100} width={100} timeout={3000}/> }
      {/* <Counter /> */}
    </div>
  );
}

export default App;
