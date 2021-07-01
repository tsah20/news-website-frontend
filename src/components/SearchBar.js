import React from "react";

import { IconButton, InputBase, Paper } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

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
}));

/**
 *  Component Search Bar
 *  Renders the name/title of the webpage
 *  @param onSubmit Callback function for the submit
 *  @param ref for the input element
 */
export const SearchBar = React.forwardRef(({ onSubmit }, ref) => {
  const classes = useStyles();

  const handleChange = (event) => {
    event.preventDefault();
  };
  return (
    <React.Fragment>
      <Paper component="form" className={classes.root}>
        <InputBase
          onChange={handleChange}
          inputRef={ref}
          className={classes.input}
          fullWidth={true}
          placeholder="Search News with keywords"
          inputProps={{ "aria-label": "search news" }}
        />
        <IconButton
          type="submit"
          onClick={onSubmit}
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </React.Fragment>
  );
});
