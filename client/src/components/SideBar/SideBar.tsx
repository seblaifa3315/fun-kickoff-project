import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import useStyles from './useStyles';

export default function SideBar(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.sideBar}>
      <div className={classes.sidebarWrapper}>
        <ul className={classes.sidebarList}>
          <NavLink to="/editProfile" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Edit profile
              </Typography>
            </li>
          </NavLink>
          <NavLink to="/editPhoto" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Profile Photo
              </Typography>
            </li>
          </NavLink>
          <NavLink to="/profileAvailability" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Availability
              </Typography>
            </li>
          </NavLink>
          <NavLink to="/profilePayment" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Payment
              </Typography>
            </li>
          </NavLink>
          <NavLink to="/profileSecurity" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Security
              </Typography>
            </li>
          </NavLink>
          <NavLink to="/profileSettings" className={classes.link} activeClassName={classes.active}>
            <li className={classes.sidebarListItem}>
              <Typography variant="body2" gutterBottom className={classes.sidebarListItem}>
                Settings
              </Typography>
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
