import * as React from "react";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const PageNotFound = () => (
  <div>
    <Header />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>This page doesn't exist!</div>
    </div>
  </div>
);

export default PageNotFound;
