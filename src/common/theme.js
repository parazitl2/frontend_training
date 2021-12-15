import { createTheme } from '@mui/material';

const typography = {
  fontFamily: [
    'Montserrat',
    'Roboto',
    'Arial',
    'sans-serif',
    'Tahoma',
    'Verdana',
    'sans-serif',
    '"Glyphicons Halflings"',
  ].join(','),
};

export const theme = createTheme({
  typography
});
