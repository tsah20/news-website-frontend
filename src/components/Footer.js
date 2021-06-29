import React from "react";

import { Box, Container, Grid, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: "20px 30px",
    backgroundColor: "#639bf1",
    marginTop: "1rem",
    padding: "1rem",
    //backgroundColor: 'rgb(235, 195, 64)',
    bottom: "0",
    left: "0",
    width: "100%",
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={`${classes.footer} ${props.customClass}`}>
      <Box color="white">
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Header 1</Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 1
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 2
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 3
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Header 2</Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 1
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 2
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 3
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Header 3</Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 1
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 2
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Link 3
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
