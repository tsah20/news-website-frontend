import React from 'react';

import { Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import BrandName from '../brand-details/BrandName.js';

const useStyles = makeStyles({
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    fontFamily: 'Raleway',
    fontWeight: 700
  }
});

export default function DesktopHeader() {
  const classes = useStyles();
  return (
    <React.Fragment>
     <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
    </React.Fragment>
  );
}
