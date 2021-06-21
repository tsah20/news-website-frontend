import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton, useMediaQuery, CircularProgress } from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginTop: '2%',
    margin: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: 'green'
  }
}))

export default function SearchBar(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper component='form' className={classes.root}>
        <InputBase className={classes.input} onChange={props.onInputChange} fullWidth={true} placeholder='Search News with keywords' inputProps={{ 'aria-label': 'search news' }} />
        <IconButton type='submit' onClick={props.onSubmit} className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </React.Fragment>
  )
}
