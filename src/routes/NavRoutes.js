import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Business from '../components/pages/Business'
import Technology from '../components/pages/Technology'
import NewsFeed from '../components/pages/NewsFeed'
import NewsDetailPage from '../components/pages/NewsDetailPage'
import Home from '../components/pages/Home'

export default function NavRoutes() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/home' />
      </Route>

      <Route exact path='/home'>
        <Home />
      </Route>

      <Route exact path='/feed'>
        <NewsFeed />
      </Route>

      <Route exact path='/usa'>
        <NewsFeed />
      </Route>

      <Route exact path='/technology'>
        <Technology />
      </Route>

      <Route exact path='/business'>
        <Business />
      </Route>

      <Route exact path='/detail'>
        <NewsDetailPage />
      </Route>
    </Switch>
  )
}
