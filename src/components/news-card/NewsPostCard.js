import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Hidden,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    margin: "auto",
    marginTop: "2%",
    maxWidth: "80%",
  },
  card: {
    display: "flex",
    width: "100%",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: "30%",
  },
  cardMediaMobile: {
    height: 140,
  },
});

/**
 *  @Component News card
 *  @param news article from the JSOn respons of API
 */
export default function NewsPostCard({ newsArticle }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12} lg={8} className={classes.grid}>
      <CardActionArea
        component="a"
        href={newsArticle.url}
        target="_blank"
        rel="noopener"
      >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <Hidden smUp>
              <CardMedia
                className={classes.cardMediaMobile}
                image={newsArticle.urlToImage}
                title={newsArticle.title}
              />
            </Hidden>
            <CardContent>
              <Typography component="h6" variant="h6">
                {newsArticle.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {newsArticle.publishedAt}
              </Typography>
              <Typography variant="subtitle1" component="p">
                {newsArticle.description}
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia
              className={classes.cardMedia}
              image={newsArticle.urlToImage}
              title={newsArticle.title}
            />
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}
