import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './components/NavBar';
import * as data from './temp.json';
import CocktailsList from './components/CocktailsList';

function App() {
  return (
    <div className="App">
      <NavBar username="Vaso"/>
      <CocktailsList cocktailsList={data.drinks} />
      <Counter />
    </div>
  );
}

export default App;
