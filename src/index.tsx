import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/app/Routes";
import "./styles/index.scss";

const load = async () => {
  render(
    <Router>
      <Routes />
    </Router>,
    document.getElementById("root")
  );
};

load();
