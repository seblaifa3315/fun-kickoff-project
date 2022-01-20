import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  authHeader: {
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  accAside: {
    fontSize: 14,
    color: '#b0b0b0',
    fontWeight: 900,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    display: 'flex',
    alignItems: 'center',
  },
  accBtn: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.3rem',
    width: 170,
    height: 54,
    borderRadius: theme.shape.borderRadius,
    filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
    color: '#f14140',
    boxShadow: 'none',
  },
}));

export default useStyles;
