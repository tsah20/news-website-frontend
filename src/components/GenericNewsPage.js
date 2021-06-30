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
import PostViewResolver from "../helpers/NewsViewResolver";

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

const getRecentNews = (searchTerm) =>
  "http://localhost:5000/top-recent-news?" + searchTerm;
export default function GenericNewsPage(props) {
  const mobileContent = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = useStyles();

  const [topNews, setTopNews] = useState([]);
  const [query, setQuery] = useState([]);

  const httpData = useHttp();
  const { isLoading, error, sendRequest: fetchNews } = httpData;

  useEffect(() => {
    const transformNews = (data) => {
      setTopNews(data.articles);
      setPages(Math.round(data.totalResults / 5));
    };
    fetchNews({ url: getRecentNews(props.query) }, transformNews);
  }, []);

  return (
    <React.Fragment>
      {/* Dynamically rendering the Content of the Badge on the basis of props*/}
      <Badge color="secondary" variant="dot" className={classes.badge}>
        <Typography className={classes.badgeText}>
          Latest News from {props.topic}
        </Typography>
      </Badge>

      {isLoading && <CircularProgress className={classes.loader} />}

      {/* View resolver to display the news cards*/}
      <PostViewResolver newsData={topNews} mobileContent={mobileContent} />

      {/* only show footer when there is some news*/}
      {!isLoading && topNews.length && <Footer />}
    </React.Fragment>
  );
}
