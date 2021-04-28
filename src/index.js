import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "assets/scss/hamacore-com.scss?v=0.1.0";

// pages for this product
import Components from "views/Components/Components.js";
import SupportPage from "views/SupportPage/SupportPage.js";
import PolicyPage from "views/PolicyPage/PolicyPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path="/support" component={SupportPage} />
      <Route path="/policy" component={PolicyPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
