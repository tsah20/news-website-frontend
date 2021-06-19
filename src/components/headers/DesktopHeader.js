import React from 'react'

import { Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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
        <Tab className={classes.tab} label='FEED'></Tab>
        <Tab className={classes.tab} label='AUTHORS'></Tab>
        <Tab className={classes.tab} label='EXPLORE'></Tab>
        <Tab className={classes.tab} label='BLOG'></Tab>
        <Tab className={classes.tab} label='CONTACT'></Tab>
      </Tabs>
    </React.Fragment>
  )
}
