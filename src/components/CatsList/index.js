import { Grid } from '@mui/material';
import React from 'react';
import CatOverview from '../CatOverview';
import PropTypes from 'prop-types';

const CatsList = ({ cats }) => {
  return (
  <>
  { cats
    ? <Grid container spacing={10}>
        { cats.map(cat => <Grid item key={cat.id} ><CatOverview {...cat} /></Grid>) }
      </Grid>
    : <div>No cats found</div>
  }
  </>);
};

CatsList.defaultProps = {
  cats: []
};

CatsList.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shapeOf({
    id: PropTypes.string.required,
    url: PropTypes.string.required,
  }))
}

export default CatsList;
