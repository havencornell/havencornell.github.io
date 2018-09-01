import * as React from "react";

import "../../styles/Header.scss";

import A from "../elements/A";
import logo from "../images/logo.svg";

const Header = (props: { activePage?: string }) => {
  const activePage = props.activePage ? props.activePage : "";

  const getStyle = (pagePath: string) => {
    let formattedPath = pagePath.slice(1);
    formattedPath = formattedPath.replace("-", " ");
    return formattedPath === activePage.toLocaleLowerCase() ? "Active" : "";
  };

  return (
    <ul className="header">
      <A href={"/home"}>
        <img src={logo} className="Header-logo" alt="Haven Logo" />
      </A>
      <A href={"/people"}>
        <li className={`red${getStyle("/people")}`}>People</li>
      </A>
      <A href={"/events"}>
        <li className={`orange${getStyle("/events")}`}>Events</li>
      </A>
      <A href={"/organizations"}>
        <li className={`yellow${getStyle("/organizations")}`}>Organizations</li>
      </A>
      <A href={"/resources"}>
        <li className={`blue${getStyle("/resources")}`}>Resources</li>
      </A>
      <A href={"/contact-us"}>
        <li className={`purple${getStyle("/contact-us")}`}>Contact Us</li>
      </A>
    </ul>
  );
};

export default Header;
