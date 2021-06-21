import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, InputBase, IconButton, useMediaQuery, CircularProgress } from '@material-ui/core/'
import SearchIcon from '@material-ui/icons/Search'
import Pagination from '@material-ui/lab/Pagination'

import useHttp from '../hooks/use-http'

import theme from '../theme/Theme.js'
import NewsPost from './NewsPostWeb'
import NewsPostMobile from './NewsPostMobile'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    marginTop: '2%',
    margin: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: 'green'
  },
  loader: {
    marginLeft: '60%'
  }
}))

export default function SearchBar() {
  const classes = useStyles()

  const [searchNews, setSearchNews] = useState([])
  const [searchKey, setSearchKey] = useState()
  const [pages, setPages] = useState()
  const [page, setPage] = React.useState(1)

  const mobileContent = useMediaQuery(theme.breakpoints.down('sm'))

  const httpData = useHttp()
  const { isLoading, error, sendRequest: fetchNews } = httpData

  const handleChange = (event) => {
    event.preventDefault()
    setSearchKey(event.target.value)
  }

  const handleSearch = (event, page = 1) => {
    event.preventDefault()
    const transformNews = (data) => {
      setSearchNews(data.articles)
      setPages(Math.round(data.totalResults / 5))
    }

    fetchNews({ url: `http://localhost:5000/search?q=${searchKey}&page=${page}` }, transformNews)
  }

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault()
    setPages(null)
    setPage(pageNumber)
    handleSearch(event, pageNumber)
  }

  const viewResolver = (newsData) => {
    return searchNews.map((post) => (mobileContent ? <NewsPostMobile key={post.title} post={post} /> : <NewsPost key={post.title} post={post} />))
  }

  return (
    <React.Fragment>
      <Paper component='form' className={classes.root}>
        <InputBase className={classes.input} onChange={handleChange} fullWidth={true} placeholder='Search News with keywords' inputProps={{ 'aria-label': 'search news' }} />

        <IconButton type='submit' onClick={handleSearch} className={classes.iconButton} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
      {isLoading && <CircularProgress className='classes.loader' />}

      {!isLoading && viewResolver()}
      {pages && <Pagination count={pages} page={page} onChange={handlePageChange} defaultPage={1} color='primary' size='large' showFirstButton showLastButton />}
    </React.Fragment>
  )
}
