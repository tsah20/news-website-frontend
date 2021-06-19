import React from 'react'

import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  logo: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 600,
    color: '#FFFEFE',
    textAlign: 'left'
  }
})

export default function BrandName() {
  const classes = useStyles()
  return (
    <Typography variant='h6' component='h1' className={classes.logo}>
      TNY-TECH-TEST
    </Typography>
  )
}
