import React from "react";

class Display extends React.Component {
  render() {
    console.log("display props..", this.props);
    return <h1>{this.props.val}</h1>;
  }
}
Display.defaultProps = {
  val: 0
};

export default Display;
