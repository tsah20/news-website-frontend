import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Business from '../components/Business'
import Technology from '../components/Technology'
import NewsFeed from '../components/NewsFeed'
import NewsDetailPage from '../components/NewsDetailPage'
import NewsPostMobile from '../components/NewsPostMobile'
import SearchBar from '../components/SearchBar'
import Home from '../components/Home'

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
        <NewsPostMobile />
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
