import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import SideBar from '../../../components/SideBar/SideBar';
import EditForm from './EditForm/EditForm';
import useStyles from './useStyles';

export default function EditProfile(): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SideBar />
      <Box className={classes.mainContent}>
        <Grid item xs={11} sm={10} md={9.5} className={classes.contentwrapper}>
          <Typography variant="h6" className={classes.contentTitle}>
            Edit Profile
          </Typography>
          <div className={classes.editProfileForm}>
            <EditForm />
          </div>
        </Grid>
      </Box>
    </div>
  );
}
