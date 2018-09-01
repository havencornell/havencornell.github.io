import * as React from "react";
import { Route, Switch } from "react-router-dom";

import App from "../../components/app/App";

import ContactPage from "../../components/pages/ContactPage";
import EventsPage from "../../components/pages/EventsPage";
import HomePage from "../../components/pages/HomePage";
import OrgPage from "../../components/pages/OrgPage";
import PageNotFound from "../../components/pages/PageNotFound";
import PeoplePage from "../../components/pages/PeoplePage";
import ResourcesPage from "../../components/pages/ResourcesPage";

export default () => (
  <App>
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route exact={true} path="//" component={HomePage} />
      <Route exact={true} path="/home" component={HomePage} />

      <Route exact={true} path="/contact-us" component={ContactPage} />
      <Route exact={true} path="/events" component={EventsPage} />
      <Route exact={true} path="/organizations" component={OrgPage} />
      <Route exact={true} path="/people" component={PeoplePage} />
      <Route exact={true} path="/resources" component={ResourcesPage} />

      <Route path="*" component={PageNotFound} />
    </Switch>
  </App>
);
