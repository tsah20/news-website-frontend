/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import theme from '../theme/Theme.js'
import SearchBar from './SearchBar'
import NewsPost from './NewsPostWeb'
import NewsPostMobile from './NewsPostMobile'
import { Hidden, useMediaQuery, Badge, Typography, CircularProgress } from '@material-ui/core'
import useHttp from '../hooks/use-http'

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: 'green'
  },
  badge: {
    marginLeft: '10%',
    marginTop: '5%',
    color: '#008B8B'
  },
  badgeText: {
    fontWeight: 'bold'
  }
}))

export default function NewsFeed() {
  const classes = useStyles()
  const [topNews, setTopNews] = useState([])
  const [pages, setPages] = useState(1)
  const [page, setPage] = React.useState(1)

  const httpData = useHttp()

  const { isLoading, error, sendRequest: fetchNews } = httpData
  const mobileContent = useMediaQuery(theme.breakpoints.down('sm'))

  useEffect(() => {
    const transformNews = (data) => {
      setTopNews(data.articles)
      setPages(Math.round(data.totalResults / 5))
    }
    fetchNews({ url: 'http://localhost:5000/top-recent-news' }, transformNews)
  }, [])

  return (
    <React.Fragment>
      <Badge color='secondary' variant='dot' className={classes.badge}>
        <Typography className={classes.badgeText}>Latest News from the World</Typography>
      </Badge>
      {isLoading && <CircularProgress className='classes.loader' />}

      {topNews.map((post) => (mobileContent ? <NewsPostMobile key={post.title} post={post} /> : <NewsPost key={post.title} post={post} />))}
    </React.Fragment>
  )
}
