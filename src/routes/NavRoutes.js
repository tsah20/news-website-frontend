import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import NewsFeed from '../components/pages/NewsFeed'
import NewsDetailPage from '../components/pages/NewsDetailPage'
import Home from '../components/pages/Home'
import CountryFeed from '../components/pages/CountryFeed'
import TechnologyFeed from '../components/pages/TechnologyFeed'

import NotFound404 from '../components/pages/NotFound404'

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
        <CountryFeed />
      </Route>

      <Route exact path='/technology'>
        <TechnologyFeed />
      </Route>

      <Route exact path='/detail'>
        <NewsDetailPage />
      </Route>

      <Route exact path='/'>
        <NotFound404 />
      </Route>
    </Switch>
  )
}
