import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, CardActionArea, Card, CardContent, CardMedia, Hidden } from '@material-ui/core'

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  grid: {
    margin: 'auto',
    marginTop: '2%',
    maxWidth: '80%'
  },
  card: {
    display: 'flex',

    width: '100%'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: '30%'
  }
})

export default function NewsPost(props) {
  const classes = useStyles()

  return (
    <Grid item xs={12} md={12} lg={8} className={classes.grid}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h6' variant='h6'>
                {props.post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {props.post.publishedAt}
              </Typography>
              <Typography variant='subtitle1' component='p'>
                {props.post.description}
              </Typography>
              <Link to={{ pathname: '/detail', state: { post: props.post } }}> Continue reading...</Link>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={props.post.urlToImage} title={props.post.title} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  )
}
