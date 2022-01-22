import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    backgroundColor: '#FAFAFA',
  },
  mainContent: {
    flex: 3,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
  },
  contentwrapper: {
    background: '#fff',
    height: '81vh',
    borderRadius: 10,
    boxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
    webkitboxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
    mozboxShadow: '1px -1px 23px 2px rgba(218,225,240,0.75)',
  },
  contentTitle: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px 0px',
    fontWeight: 'bolder',
  },
}));

export default useStyles;
