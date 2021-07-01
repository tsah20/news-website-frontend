/* eslint-disable semi */
import React from "react";

import GenericNewsPage from "../components/GenericNewsPage";

/**
 *  @Page  Shows Local  News
 *
 */
export default function LocalNews() {
  return <GenericNewsPage newsQueryString="country=us" newsCategory="USA" />;
}
