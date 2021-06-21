import React from 'react'

import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core'

import theme from './theme/Theme.js'
import DesktopHeader from './components/headers/DesktopHeader.js'
import NavRoutes from './routes/NavRoutes.js'
import MobileHeader from './components/headers/MobileHeader.js'
import Footer from './components/Footer'

export default function App() {
  const showText = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <React.Fragment>
      <AppBar position='fixed'>
        <Toolbar>{showText ? <MobileHeader /> : <DesktopHeader />}</Toolbar>
      </AppBar>
      <Toolbar />
      <NavRoutes />
    </React.Fragment>
  )
}
