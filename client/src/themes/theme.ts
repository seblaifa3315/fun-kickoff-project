import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Arial"',
    fontSize: 12,
    button: {
      textTransform: 'uppercase',
      fontWeight: 700,
    },
    caption: {
      fontWeight: 'bolder',
    },
    subtitle1: {
      fontWeight: 'bolder',
      letterSpacing: -0.2,
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
