/* eslint-disable semi */
import React, { useEffect, useState } from "react";

import {
  Badge,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import useHttp from "../hooks/use-http";
import theme from "../theme/Theme.js";
import Footer from "./Footer";
import NewsListIterator from "../helpers/NewsListIterator";

const useStyles = makeStyles((theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: "green",
  },
  badge: {
    marginLeft: "10%",
    marginTop: "5%",
    color: "#008B8B",
  },
  badgeText: {
    fontWeight: "bold",
  },
}));

const getNewsCateoryURL = (newsQueryString) =>
  "http://localhost:5000/top-recent-news?" + newsQueryString;

/**
 *  @Component Generic News page Component
 *  @param  newsQueryString Query string for the category of the news to fetch
 *  @param  newsCategory  News Category
 */
export default function GenericNewsPage({ newsQueryString, newsCategory }) {
  const classes = useStyles();

  const [categoryNews, setCategoryNews] = useState([]);
  const { isLoading, error, sendRequest: fetchNews } = useHttp();

  useEffect(() => {

    const transformNews = (data) => {
      setCategoryNews(data.articles);
      setPages(Math.round(data.totalResults / 5));
    };
    fetchNews({ url: getNewsCateoryURL(newsQueryString) }, transformNews);
  }, []);

  return (
    <React.Fragment>
      {/* Dynamically rendering the Content of the Badge on the basis of props*/}
      <Badge color="secondary" variant="dot" className={classes.badge}>
        <Typography className={classes.badgeText}>
          Latest News from {newsCategory}
        </Typography>
      </Badge>

      {isLoading && <CircularProgress className={classes.loader} />}

      {/* Iterates on the news data to show news cards*/}
      <NewsListIterator newsList={categoryNews} />

      {/* only show footer when there is some news*/}
      {!isLoading && categoryNews.length && <Footer />}
    </React.Fragment>
  );
}
