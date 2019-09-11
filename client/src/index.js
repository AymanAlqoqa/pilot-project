import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import App from "./components/App";

import List from "./models/List";
import { onPatch } from "mobx-state-tree";
import theme from "./theme";

const list = List.create();
list.fetchList();

onPatch(list, patch => {
  console.log(patch); //note: this log should be removed in production
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App list={list} />
  </ThemeProvider>,
  document.querySelector("#root")
);
