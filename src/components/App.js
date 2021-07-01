import React from "react";

import { AppBar, Toolbar, useMediaQuery } from "@material-ui/core";

import NavRoutes from "../routes/NavRoutes.js";
import theme from "../theme/Theme.js";
import DesktopHeader from "./nav-bar/HorizontalNavBar.js";
import MobileHeader from "./nav-bar/SideNavBar.js";

/**
 *  Component App
 *  Renders Header & Routes
 */
export default function App() {
  const showText = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar>{showText ? <MobileHeader /> : <DesktopHeader />}</Toolbar>
      </AppBar>
      <Toolbar />
      <NavRoutes />
    </React.Fragment>
  );
}
