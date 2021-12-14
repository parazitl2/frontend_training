import { Grid } from '@mui/material';
import React from 'react';
import CatOverview from '../CatOverview';

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

export default CatsList;