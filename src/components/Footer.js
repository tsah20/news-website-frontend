import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'

function Copyright() {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    //marginTop: 'calc(5% + 60px)',
    // bottom: '0'
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: 'rgb(235, 195, 64)',
    bottom: '0',
    left: '0',
    width: '100%'
  }
}))

export default function StickyFooter(props) {
  const classes = useStyles()

  return (
    <footer className={`${classes.footer} ${props.customClass}`}>
      <Container maxWidth='sm'>
        <Typography variant='body1'>My sticky footer can be found here.</Typography>
        <Copyright />
      </Container>
    </footer>
  )
}
