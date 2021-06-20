import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  grid: {
    margin: 'auto',
    marginTop: '5px'
  },
  card: {
    display: 'flex',
    margin: 'auto',
    width: '100%'
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: '30%'
  }
});

const post = {
  title: 'News 1',
  date: 'June 19',
  description: 'This is the news1 content.',
  image: 'https://source.unsplash.com/random',
  imageText: 'Image Text'
};

export default function NewsPost(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} lg={8} className={classes.card}>
      <CardActionArea component='a' href='#'>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component='h2' variant='h5'>
                {post.title}
              </Typography>
              <Typography variant='subtitle1' color='textSecondary'>
                {post.date}
              </Typography>
              <Typography variant='subtitle1' paragraph>
                {post.description}
              </Typography>
              <Typography variant='subtitle1' color='primary'>
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
