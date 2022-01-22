import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';

import useStyles from './useStyles';
import logo from '../../Images/logo.png';

const Navbar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar color="default" position="static" className={classes.navbar}>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
