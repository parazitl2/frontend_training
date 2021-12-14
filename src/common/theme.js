import { createMuiTheme } from '@material-ui/core/styles';

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

export const theme = createMuiTheme({
  typography,
});

// export const theme = createTheme({
//   typography: {
//     fontFamily: 'Montserrat, Roboto, Arial, sans-serif'
//   }
// });
