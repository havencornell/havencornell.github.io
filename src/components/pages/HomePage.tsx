import * as React from "react";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const HomePage = () => (
  <div>
    <Header />
    <div className={"page-wrapper"}>
      <img
        className={"rainbow-cornell"}
        src={require("../images/CornellLGBTQ.jpg")}
      />
      <br />
      <br />
      <br />
      <div className={"page-title"}> Haven: Cornell's LGBTQ Student Union</div>
    </div>
  </div>
);

export default HomePage;
