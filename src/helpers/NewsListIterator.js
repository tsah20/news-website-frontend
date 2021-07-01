import React from "react";

import NewsPostCard from "../components/news-card/NewsPostCard";

/**
 *  Utility Function
 *  Renders the name/title of the webpage
 *  @param fetched (news data)
 *
 */
export default function NewsListIterator({ newsList }) {
  return newsList.map((news) => (
    <NewsPostCard key={news.title} newsArticle={news} />
  ));
}
