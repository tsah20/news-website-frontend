import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core/'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginTop: '2%',
    margin: 'auto',
    padding: '1.5em',
    border: '1px solid red'
  }
}))

export default function NoResultFound() {
  const classes = useStyles()
  return (
    <React.Fragment>
      <Paper component='form' className={classes.root}>
        Uh Oh! No Results found
      </Paper>
    </React.Fragment>
  )
}
