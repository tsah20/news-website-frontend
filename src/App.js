import React from 'react'

import { AppBar, Toolbar } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter } from 'react-router-dom'

import DesktopHeader from './components/headers/DesktopHeader.js'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppBar>
          <Toolbar>
            <DesktopHeader />
          </Toolbar>
        </AppBar>
      </BrowserRouter>
    </ThemeProvider>
  )
}