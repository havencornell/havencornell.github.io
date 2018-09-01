import * as React from "react";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const ContactPage = () => (
  <div>
    <Header activePage={"contact us"} />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>
        <span className={"contact-info"}>
          To get in contact with Haven, email{" "}
          <a href={"mailto:havenlgbtq.cornell@gmail.com"}>
            havenlgbtq.cornell@gmail.com
          </a>{" "}
          or send a{" "}
          <a href={"http://facebook.com/HavenCornell"}>Facebook message</a>.
          <br /> <br />
          To reach the Haven President, email{" "}
          <a href={"mailto:jsa94@cornell.edu"}>Joseph Anderson</a>.<br /> <br />
          To reach the Haven Treasurer, email{" "}
          <a href={"mailto:haventreasurer.cornell@gmail.com"}>Elisha Chen</a>.
          To reach the Haven Secretary, email{" "}
          <a href={"mailto:cjm353@cornell.edu"}>Cassidy Mileti</a>.
          <br /> <br />
          To reach the Haven Advisor, email{" "}
          <a href={"mailto:cl2548@cornell.edu"}>Christopher Lujan</a>.
        </span>
      </div>
    </div>
  </div>
);

export default ContactPage;
