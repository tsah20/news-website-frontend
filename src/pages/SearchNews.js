import React, { useState, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, CircularProgress } from "@material-ui/core/";
import Pagination from "@material-ui/lab/Pagination";

import useHttp from "../hooks/use-http";

import theme from "../theme/Theme.js";
import NoResultFound from "./NoResultFound";
import { SearchBar } from "../components/SearchBar";
import Footer from "../components/Footer";
import NewsListIterator from "../helpers/NewsListIterator";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4px 4px",
    display: "flex",
    alignItems: "center",
    width: "80%",
    marginTop: "2%",
    margin: "auto",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: "green",
  },
  loader: {
    marginLeft: "60%",
  },
  pagination: {
    marginTop: "2%",
    marginRight: "10%",
    float: "right",
  },
  emptyContainerFoot: {
    position: "fixed",
  },

  postContainerFoot: {
    position: "static",
  },
}));

/* Generate the Search URL */
const getSearchUrl = (searchTerm, pageNumber) =>
  `http://localhost:5000/search?q=${searchTerm}&page=${pageNumber}`;

/**
 *  @Page Home Page shown at the root URL
 *  Home Page for the application
 *  Renders the search bar to display the news
 */
export default function SearchNews() {
  const classes = useStyles();
  const mobileContent = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchNews, setSearchNews] = useState({
    totalResults: -1,
    page: "1",
    pageSize: "5",
    articles: [],
  });
  const [pages, setPages] = useState(1);
  const inputRef = useRef();
  const { isLoading, error, sendRequest: fetchNews } = useHttp();

  const handleSearch = (event, page = 1) => {
    event.preventDefault();
    const searchKey = inputRef.curent.value;
    const updateNewsData = (data) => {
      setSearchNews(data);
      /* Free API can only fetch 100 news**/
      const updatedPageCount =
        data.totalResults > 100
          ? Math.round(100 / 5)
          : Math.round(data.totalResults / 5);
      setPages(updatedPageCount);
    };
    fetchNews({ url: getSearchUrl(searchKey, page) }, updateNewsData);
  };

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    handleSearch(event, pageNumber);
  };

  /* Dynamically making footer float or fixed **/
  const footerCssClass =
    !isLoading && searchNews.articles.length
      ? classes.postContainerFoot
      : classes.emptyContainerFoot;

  return (
    <React.Fragment>
      <SearchBar
        data-test="component-searchbar"
        ref={inputRef}
        onSubmit={handleSearch}
      />

      {/* show circular progress bar while the content is beingloaded*/}
      {isLoading && <CircularProgress className={classes.loader} />}

      {/* show no Result when total result count is 0*/}
      {!isLoading && searchNews.totalResults == 0 && <NoResultFound />}

      {/* show content and pagination when API respinse has articles*/}
      {!isLoading && searchNews.articles.length > 0 && (
        <React.Fragment>
          <NewsListIterator newsList={searchNews.articles} />
          <Pagination
            count={pages}
            onChange={handlePageChange}
            defaultPage={1}
            className={classes.pagination}
            color="primary"
            size="large"
            showFirstButton
            showLastButton
          />
        </React.Fragment>
      )}
      <Footer customClass={footerCssClass} />
    </React.Fragment>
  );
}
