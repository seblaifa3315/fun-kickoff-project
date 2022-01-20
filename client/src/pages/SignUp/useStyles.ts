import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    '& .MuiInput-underline:before': {
      borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
    },
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  container: {
    height: '100%',
    background: '#fff',
    borderRadius: 10,
    boxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
    webkitboxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
    mozboxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
  },
  authWrapper: {
    paddingTop: 23,
    display: 'flex',
  },
  welcome: {
    fontSize: 10,
    paddingBottom: 20,
    color: '#000000',
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default useStyles;
