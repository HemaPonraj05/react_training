import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    const ts = new Date().toLocaleTimeString();
    this.state = {
      stamp: ts
    };
  }

  render() {
    return <div>{this.state.stamp}</div>;
  }

  componentDidMount() {
    setInterval(() => {
      const tsNew = new Date().toLocaleTimeString();
      this.setState({ stamp: tsNew });
    }, 1000);
  }
}

export default Clock;
