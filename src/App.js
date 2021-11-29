import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Route, Routes } from 'react-router';
import CocktailsListContainer from './containers/cocktailsList';
import NavBarLayout from './components/layouts/NavBarLayout';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavBarLayout />}>
          <Route index element={<CocktailsListContainer />}/>
        </Route>
      </Routes>
      {/* <Counter /> */}
    </div>
  );
}

export default App;
