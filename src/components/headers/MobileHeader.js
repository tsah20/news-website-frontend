import React, { useState } from 'react'

import { Toolbar, makeStyles, IconButton, Drawer, Link, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

import { Link as RouterLink } from 'react-router-dom'

import BrandName from '../brand-details/BrandName'

const useStyles = makeStyles(() => ({
  drawerContainer: {
    padding: '20px 30px'
  }
}))

export default function MobileHeader() {
  const classes = useStyles()

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const headersData = [
    {
      label: 'HOME',
      href: '/home'
    },
    {
      label: 'FEED',
      href: '/feed'
    },
    {
      label: 'USA',
      href: '/usa'
    },
    {
      label: 'TECHNOLOGY',
      href: '/technology'
    },
    {
      label: 'BUSINESS',
      href: '/business'
    }
  ]

  const { mobileView, drawerOpen } = state

  const handleDrawerOpen = () => {
    setState((prevState) => ({ ...prevState, drawerOpen: true }))
  }

  const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }))

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link component={RouterLink} to={href} color='inherit' key={label + href}>
          <MenuItem>{label}</MenuItem>
        </Link>
      )
    })
  }

  return (
    <Toolbar>
      <IconButton
        {...{
          edge: 'start',
          color: 'inherit',
          'aria-label': 'menu',
          'aria-haspopup': 'true',
          onClick: handleDrawerOpen
        }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        {...{
          anchor: 'left',
          open: drawerOpen,
          onClose: handleDrawerClose,
          variant: 'temporary'
        }}
      >
        <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
      </Drawer>

      <BrandName />
    </Toolbar>
  )
}
