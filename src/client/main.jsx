import "vite/dynamic-import-polyfill";
import App from "./App";
import React from "react";
import { render } from "react-dom";

function init() {
  const rootNode = document.getElementById("react-root");
  render(<App />, rootNode);
}

init();
