/* eslint-disable semi */
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery, Badge, Typography, CircularProgress, Paper } from '@material-ui/core'

import theme from '../theme/Theme.js'
import NewsPost from './news-card/NewsPostWeb'
import NewsPostMobile from './news-card/NewsPostMobile'
import useHttp from '../hooks/use-http'
import Footer from './Footer'

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

export default function NewsFeed(props) {
  const mobileContent = useMediaQuery(theme.breakpoints.down('sm'))

  const classes = useStyles()
  const [topNews, setTopNews] = useState([])
  const [query, setQuery] = useState([])

  const httpData = useHttp()
  const { isLoading, error, sendRequest: fetchNews } = httpData

  useEffect(() => {
    const transformNews = (data) => {
      setTopNews(data.articles)
      setPages(Math.round(data.totalResults / 5))
    }
    const query = props.query ? `?${props.query}` : ''
    query ? setQuery(query.split('=')) : ''
    fetchNews({ url: `http://localhost:5000/top-recent-news${query}` }, transformNews)
  }, [])

  return (
    <React.Fragment>
      <Badge color='secondary' variant='dot' className={classes.badge}>
        {!query.length && <Typography className={classes.badgeText}>Latest News from the World</Typography>}
        {!!query.length && <Typography className={classes.badgeText}>Latest News from {query[1]} </Typography>}
      </Badge>
      {isLoading && <CircularProgress className='classes.loader' />}

      {topNews.map((post) => (mobileContent ? <NewsPostMobile key={post.title} post={post} /> : <NewsPost key={post.title} post={post} />))}
      {!isLoading && topNews.length && <Footer />}
    </React.Fragment>
  )
}
