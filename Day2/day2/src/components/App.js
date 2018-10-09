/*import React from "react";

function App() {
  return <h1>First CRA App!</h1>;
}

export default App; */

import React from "react";
import Display from "./Display";
import Form from "./Form";

class App extends React.Component {
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
        <Form incrHandler={this.increment} decrHandler={this.decrHandler} />
        <Display val={this.state.count} />
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

export default App;
