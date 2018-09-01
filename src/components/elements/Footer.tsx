import * as React from "react";

import "../../styles/constants.scss";

const Footer = () => {
  return (
    <ul className={"footer"}>
      <li>
        <span>
          <a href={"https://www.facebook.com/HavenCornell"}>
            <img
              className={"footer-image-first"}
              alt={"Facebook link"}
              src={require("../images/facebook-circle.png")}
            />
          </a>
        </span>
        <span>
          <a href={"https://www.instagram.com/havenatcornell/"}>
            <img
              className={"footer-image"}
              alt={"Instagram link"}
              src={require("../images/instagram-circle.png")}
            />
          </a>
        </span>
        <span>
          <a href={"mailto:haven@cornell.edu"}>
            <img
              className={"email-image"}
              alt={"email link"}
              src={require("../images/email-circle.png")}
            />
          </a>
        </span>
      </li>
    </ul>
  );
};

export default Footer;
