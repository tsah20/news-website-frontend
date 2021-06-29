import React, { useRef, useState } from "react";

import { CircularProgress, useMediaQuery } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

import useHttp from "../../hooks/use-http";
import theme from "../../theme/Theme.js";
import Footer from "../Footer";
import PostViewResolver from "../PostViewResolver";
import { SearchBar } from "../SearchBar";
import NoResultFound from "./NoResultFound";

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

const initialState = {
  loading: "",
  error: "",
  data: [],
};

export default function Home() {
  const classes = useStyles();
  const mobileContent = useMediaQuery(theme.breakpoints.down("sm"));

  const [searchNews, setSearchNews] = useState({
    totalResults: -1,
    page: "1",
    pageSize: "5",
    articles: [],
  });
  const [pages, setPages] = useState();
  const [currentpage, setCurrentPage] = useState();
  const inputRef = useRef();
  const httpData = useHttp();

  const { isLoading, error, sendRequest: fetchNews } = httpData;

  const handleSearch = (event, page = 1) => {
    event.preventDefault();
    let searchKey = inputRef.current.value;

    const transformNews = (data) => {
      setSearchNews(data);
      // Free API can only fetch 100 news
      let updatedPageCount =
        data.totalResults > 100
          ? Math.round(100 / 5)
          : Math.round(data.totalResults / 5);
      setPages(updatedPageCount);
    };

    fetchNews(
      { url: `http://localhost:5000/search?q=${searchKey}&page=${page}` },
      transformNews
    );
  };

  const handlePageChange = (event, pageNumber) => {
    event.preventDefault();
    handleSearch(event, pageNumber);
  };

  //Dynamically making footer float or fixed
  const footerCssClass =
    !isLoading && searchNews.articles.length
      ? classes.postContainerFoot
      : classes.emptyContainerFoot;

  return (
    <React.Fragment>
      <SearchBar ref={inputRef} onSubmit={handleSearch} />

      {isLoading && <CircularProgress className={classes.loader} />}

      {/* show no Result when total result count is 0*/}
      {!isLoading && searchNews.totalResults == 0 && <NoResultFound />}

      {/* show content and pagination when API respinse has articles*/}
      {!isLoading && searchNews.articles.length > 0 && (
        <React.Fragment>
          <PostViewResolver
            newsData={searchNews.articles}
            mobileContent={mobileContent}
          />
          <Pagination
            count={pages}
            page={currentpage}
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
