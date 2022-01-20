import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    paddingBottom: 10,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 10,
    color: 'rgb(0,0,0,0.4)',
    textTransform: 'uppercase',
    fontWeight: 'bolder',
  },
  inputs: {
    padding: '5px',
  },
  forgot: {
    paddingRight: 10,
    color: '#f14140',
  },
  submit: {
    width: 160,
    height: 56,
    textTransform: 'uppercase',
  },
}));

export default useStyles;
