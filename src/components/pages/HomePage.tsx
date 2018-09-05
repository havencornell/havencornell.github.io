import * as React from "react";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const HomePage = () => (
  <div>
    <Header />
    <div className={"page-wrapper"}>
      <img
        className={"rainbow-cornell"}
        src={require("../images/CornellLGBTQ.png")}
      />
      <br />
      <br />
      <br />
      <div className={"page-title"}> Haven: Cornell's LGBTQ+ Student Union</div>
      <br />
      <br />
      <a className={"listserv-link"} href={"https://goo.gl/forms/d4qqHgiga0kKeBXC3"}>Looking to get involved? Apply to join our e-board.</a>
    </div>
  </div>
);

export default HomePage;
