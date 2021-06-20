import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '4px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    margin: 'auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderColor: 'green'
  }
}));

export default function SearchBar() {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <InputBase className={classes.input} fullWidth='true' placeholder='Search News with keywords' inputProps={{ 'aria-label': 'search news' }} />
      <IconButton type='submit' className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
