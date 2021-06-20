import React from 'react';

import { AppBar, Toolbar, useMediaQuery } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import theme from './theme/Theme.js';
import DesktopHeader from './components/headers/DesktopHeader.js';
import MobileHeader from './components/headers/MobileHeader.js';
import SearchBar from './components/SearchBar';
import Blog from './components/Blog';
import Explore from './components/Explore';
import Authors from './components/Author';

export default function App() {
  const showText = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppBar position='fixed'>
          <Toolbar>{showText ? <MobileHeader /> : <DesktopHeader />}</Toolbar>
        </AppBar>
        <Toolbar />
        <Switch>
          <Route exact path='/feed'>
            <SearchBar />
          </Route>
          <Route exact path='/authors'>
            <Authors />
          </Route>

          <Route exact path='/explore'>
            <Explore />
          </Route>

          <Route exact path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
