import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: '#e8e8e8',
    },
  },
  formWrapper: {
    width: '75%',
    marginRight: 50,
  },
  groupWrapper: {
    display: 'flex',
    marginBottom: 15,
    alignItems: 'center',
  },
  groupWrapperDescription: {
    display: 'flex',
    marginBottom: 20,
  },
  labelWrapper: {
    minWidth: 120,
    display: 'flex',
    justifyContent: 'end',
    marginRight: 10,
  },
  labelWrapperDescription: {
    minWidth: 120,
    display: 'flex',
    justifyContent: 'end',
    marginRight: 10,
    paddingTop: 12,
  },
  gender: {
    width: 124,
  },
  birthdate: {
    display: 'flex',
    width: '100%',
  },
  month: {
    flex: '1.5',
  },
  day: {
    flex: '1',
    margin: '0px 10px 0px 10px',
  },
  year: { flex: '1' },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: 50,
  },
  submit: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 130,
    height: 50,
    borderRadius: theme.shape.borderRadius,
    fontSize: 12,
    backgroundColor: '#3a8dff',
    fontWeight: 'bold',
  },
  errors: {
    color: 'red',
    paddingLeft: 130,
    marginTop: -15,
    marginBottom: 10,
  },
  addPhoneComponent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

export default useStyles;
