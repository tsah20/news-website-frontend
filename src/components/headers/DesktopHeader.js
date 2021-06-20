import React from 'react'

import { Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import BrandName from '../brand-details/BrandName.js'

const useStyles = makeStyles({
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    fontFamily: 'Raleway',
    fontWeight: 700
  }
})

export default function DesktopHeader() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <BrandName />
      <Tabs className={classes.tabContainer}>
        <Tab className={classes.tab} label='FEED' value='/feed' component={Link} to={'/feed'}></Tab>
        <Tab className={classes.tab} label='AUTHORS' value='/authors' component={Link} to={'/authors'}></Tab>
        <Tab className={classes.tab} label='EXPLORE'></Tab>
        <Tab className={classes.tab} label='BLOG'></Tab>
      </Tabs>
    </React.Fragment>
  )
}
