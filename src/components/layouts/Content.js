import React from "react";
import {
  screen01,
  screen02,
  screen03,
  screen04,
  screen05,
  screen06,
} from "../screens";
import { Route } from "react-router-dom";

class Content extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={screen01} />
        <Route exact path="/" component={screen02} />
        <Route exact path="/" component={screen03} />
        <Route exact path="/" component={screen04} />
        <Route exact path="/" component={screen05} />
        <Route exact path="/" component={screen06} />
      </div>
    );
  }
}

export default Content;
