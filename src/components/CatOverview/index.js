import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { NOT_FOUND_IMAGE_CDN } from '../../constants/thecatApi';

const CatOverview = ({ url, id }) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia 
        component='img'
        height='300'
        image={ url || NOT_FOUND_IMAGE_CDN }
        alt='Image of cat'
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          id: { id }
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CatOverview;