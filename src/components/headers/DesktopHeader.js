import React, { useState } from 'react'

import { Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import BrandName from '../brand-details/BrandName.js'

const useStyles = makeStyles({
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    fontFamily: 'Montserrat',
    fontWeight: 700
  }
})

export default function DesktopHeader() {
  const classes = useStyles()
  const [value, setValue] = useState('home')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <React.Fragment>
      <BrandName />
      <Tabs className={classes.tabContainer}>
        <Tab className={classes.tab} label='HOME' value='/feed' component={Link} to={'/home'}></Tab>
        <Tab className={classes.tab} label='FEED' value='/authors' component={Link} to={'/feed'}></Tab>
        <Tab className={classes.tab} label='USA'></Tab>
        <Tab className={classes.tab} label='TECHNOLOGY'></Tab>
      </Tabs>
    </React.Fragment>
  )
}
