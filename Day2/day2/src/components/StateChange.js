import React from "react";

class StateChange extends React.Component {
  constructor() {
    super();
    const ts = new Date().toLocaleTimeString();
    this.state = {
      stamp: ts,
      counter: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState(prevState => {
      return { counter: prevState.counter + 1 };
    });
  }

  decrement() {
    this.setState(prevState => {
      return { counter: prevState.counter - 1 };
    });
  }

  render() {
    return (
      <div>
        <input type="button" value="Increment" onClick={this.increment} />
        <input type="button" value="Decrement" onClick={this.decrement} />
        <div> {this.state.counter} </div>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      const tsNew = new Date().toLocaleTimeString();
      this.setState({ stamp: tsNew });
    }, 1000);
  }
}

export default StateChange;
