import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial"',
    fontSize: 12,
    caption: {
      fontWeight: 'bolder',
      letterSpacing: 0.8,
      fontSize: 8,
    },
    body2: {
      fontWeight: 'inherit',
    },
    subtitle1: {
      fontWeight: 'bolder',
      fontSize: 10,
      textTransform: 'uppercase',
      letterSpacing: 1.1,
    },
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
    },
  },

  palette: {
    primary: { main: '#f14140' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 6,
});
