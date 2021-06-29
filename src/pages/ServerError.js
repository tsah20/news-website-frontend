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
    border: '1px solid red',
    height: '50%'
  }
}))

export default function ServerError(props) {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Paper component='div' className={classes.root}>
        {props.message}
      </Paper>
    </React.Fragment>
  )
}
