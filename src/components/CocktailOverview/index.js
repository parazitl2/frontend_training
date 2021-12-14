import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

/*
  Card to show exact coctail
*/
const CocktailOverview = ({
  cocktail: {
    strDrink: name,
    strDrinkThumb: imageSrc,
    strInstructions: instruction,
  }
}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="300"
        image={imageSrc}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {instruction}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

CocktailOverview.propTypes = {
  cocktail: {}
};

CocktailOverview.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strInstructions: PropTypes.string,
  })
};

export default CocktailOverview;
