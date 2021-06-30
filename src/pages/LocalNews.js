/* eslint-disable semi */
import React from "react";

import GenericNewsPage from "../components/GenericNewsPage";

export default function LocalNews() {
  return <GenericNewsPage query="country=us" topic="USA" />;
}
