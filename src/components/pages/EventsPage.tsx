import * as React from "react";

import Header from "../elements/Header";
import "../../styles/constants.scss";

const EventsPage = () => (
  <div>
    <Header activePage={"events"} />
    <div className={"page-wrapper"}>
      <div className={"page-contents"}>
        <h2>Calendar</h2>
        <iframe
          className={"calendar"}
          src="https://calendar.google.com/calendar/embed?src=cornell.edu_if9espltuba10s0lnofm1c5v9c%40group.calendar.google.com&ctz=America%2FNew_York"
        />
        <h2>Event Collaboration Processes</h2>
        <div>
          To publicize an event through Haven, fill out{" "}
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLScKBe6TPjdM02_4nh_4d7zz-Uu-Ph0obttqOECEBBWSmwNngg/viewform"
            }
          >
            this form
          </a>
          .<br />
          To collaborate with Haven on an event, fill out{" "}
          <a
            href={
              "https://docs.google.com/forms/d/e/1FAIpQLSe38uWSVj1kiG0Nyn_QDWOkKnH_bYdM0P6pd2_nsJptINIxCA/viewform"
            }
          >
            this form
          </a>
          .
        </div>
      </div>
    </div>
  </div>
);

export default EventsPage;
