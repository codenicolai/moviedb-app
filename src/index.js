import React from "react";
import ReactDOM from "react-dom";

import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";

import defaultTheme from "theme/defaultTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
