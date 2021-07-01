import React from "react";

import GenericNewsPage from "../components/GenericNewsPage";

/**
 *  @Page  Shows  Tech News
 */
export default function TechNews() {
  return (
    <GenericNewsPage
      newsQueryString="category=technology"
      newsCategory="Technology"
    />
  );
}
