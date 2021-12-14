import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CocktailsList from '../../components/CocktailsList/index.js';
import { cocktailsActions, cocktailsSelectors } from '../../ducks/cocktails';

const CocktailsListContainer = () => {
  const dispatch = useDispatch();
  const cocktailsList = useSelector(cocktailsSelectors.selectCocktails);

  useEffect(() => {
    dispatch(cocktailsActions.cocktailsByLetterRequested('a'));
  }, [dispatch]);

  return (
    <>
    {
      cocktailsList.length
        ? <CocktailsList cocktailsList={cocktailsList} />
        : <div>no any cocktail</div>
    }
    </>
  );
};

export default CocktailsListContainer;
