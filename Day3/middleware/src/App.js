import React, { Component } from "react";
import DisplayContainer from "./Containers/DisplayContainer";
import FormContainer from "./Containers/FormContainer";

class App extends Component {
  render() {
    return (
      <div>
        <FormContainer />
        <DisplayContainer />
      </div>
    );
  }
}

export default App;
