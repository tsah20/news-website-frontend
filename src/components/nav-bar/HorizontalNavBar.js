import React, { useState } from "react";

import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

import BrandName from "../brand-details/BrandName.js";

const useStyles = makeStyles({
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Montserrat",
    fontWeight: 700,
  },
});

/**
 * Component for showing horizontal Navigation Bar
 */

export default function HorizontalNavBar() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <BrandName brandName="TNY-TECH-TEST" />
      <Tabs
        value={value}
        className={classes.tabContainer}
        onChange={handleChange}
        aria-label="nav bar tabs"
      >
        <Tab
          className={classes.tab}
          label="SEARCH"
          component={Link}
          to={"/search"}
        ></Tab>
        <Tab
          className={classes.tab}
          label="WORLD"
          component={Link}
          to={"/world"}
        ></Tab>
        <Tab
          className={classes.tab}
          label="USA"
          component={Link}
          to={"/usa"}
        ></Tab>
        <Tab
          className={classes.tab}
          label="TECHNOLOGY"
          component={Link}
          to={"/technology"}
        ></Tab>
      </Tabs>
    </React.Fragment>
  );
}
