import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  constructor(props) {
    super(props);
    //code to logout
  }

  render() {
    return <Redirect to="/" />;
  }
}

export default Logout;
