import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme/Theme.js";
import App from "./components/App";

const appRoot = document.getElementById("app-root");

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
  appRoot
);
