import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import CocktailOverview from '../CocktailOverview';

const CocktailsList = ({ cocktailsList }) => {
  return (
    <Grid container spacing={{ xs: 2, sm: 2, md: 3, lg: 4 }}>
      { cocktailsList.length
        ? cocktailsList.map((cocktail) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={cocktail.idDrink}>
            <CocktailOverview cocktail={cocktail} />
          </Grid>
        ))
        : <div>No cocktails</div>
      }
    </Grid>
  );
};

CocktailsList.defaultTypes = {
  cocktailsList: [],
};

CocktailsList.propTypes = {
  cocktailsList: PropTypes.arrayOf(PropTypes.object),
};

export default CocktailsList;
