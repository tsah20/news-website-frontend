import React from "react";

import NewsPostMobile from "../components/news-card/NewsPostMobile";
import NewsPost from "../components/news-card/NewsPostWeb";

/**
 *  Utility Function
 *  Renders the name/title of the webpage
 *  @param fetched (news data)
 *  @param  resolved (media query for mobile view)
 */
export default function NewsViewResolver({ newsData, mobileContent }) {
  if (mobileContent) {
    return newsData.map((post) => (
      <NewsPostMobile key={post.title} post={post} />
    ));
  } else {
    return newsData.map((post) => <NewsPost key={post.title} post={post} />);
  }
}
