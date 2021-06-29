import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import WorldNews from "../pages/WorldNews";
import NewsDetailPage from "../pages/NewsDetailPage";
import SearchNews from "../pages/SearchNews";
import USNews from "../pages/LocalNews";
import TechNews from "../pages/TechNew";
import NotFound404 from "../pages/NotFound404";

export default function NavRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/search" />
      </Route>

      <Route exact path="/search">
        <SearchNews />
      </Route>

      <Route exact path="/world">
        <WorldNews />
      </Route>

      <Route exact path="/usa">
        <USNews />
      </Route>

      <Route exact path="/technology">
        <TechNews />
      </Route>

      <Route exact path="/detail">
        <NewsDetailPage />
      </Route>

      <Route exact path="/">
        <NotFound404 />
      </Route>
    </Switch>
  );
}
