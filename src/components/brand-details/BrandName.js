import React from "react";

import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
});

/**
 *  Component Brand Name
 *  Renders the name/title of the webpage
 *  @param props.text
 */
export default function BrandName({ brandName }) {
  const classes = useStyles();
  return (
    <Typography variant="h6" component="h1" className={classes.logo}>
      {brandName}
    </Typography>
  );
}
