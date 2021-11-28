import React, { useEffect } from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import NavBar from './components/NavBar';
// import * as data from './temp.json';
import CocktailsList from './components/CocktailsList';
import { useDispatch, useSelector } from 'react-redux';
import { cocktailsActions, cocktailsSelectors } from './ducks/cocktails';

function App() {
  const dispatch = useDispatch();
  const cocktailsList = useSelector(cocktailsSelectors.selectCocktails);
  console.log(cocktailsList);

  useEffect(() => {
    dispatch(cocktailsActions.cocktailsByLetterRequested('a'));
  }, [dispatch]);

  return (
    <div className="App">
      <NavBar username="Vaso"/>
      {
        cocktailsList.length
          ? <CocktailsList cocktailsList={cocktailsList} />
          : <div>no any cocktail</div>
      }
      <Counter />
    </div>
  );
}

export default App;
