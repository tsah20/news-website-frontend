import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton, useMediaQuery, CircularProgress } from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'
import Pagination from '@material-ui/lab/Pagination'

import useHttp from '../hooks/use-http'

import theme from '../theme/Theme.js'
import NewsPost from './NewsPostWeb'
import NewsPostMobile from './NewsPostMobile'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginTop: '2%',
    margin: 'auto'
  }
}))

export default function SearchBar() {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper component='form' className={classes.root}>
        Uh Oh! No Results found
      </Paper>
    </React.Fragment>
  )
}
