import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

interface Props {
  linkTo: string;
  asideText: string;
  btnText: string;
}

const AuthFooter = ({ linkTo, asideText, btnText }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Box p={1} display="flex" justifyContent="flex-end" alignSelf="center" className={classes.authHeader}>
      <Typography variant="subtitle1" className={classes.accAside}>
        {asideText}
      </Typography>
      <Typography variant="subtitle1" component={Link} to={linkTo} className={classes.accBtn}>
        {btnText}
      </Typography>
    </Box>
  );
};

export default AuthFooter;
