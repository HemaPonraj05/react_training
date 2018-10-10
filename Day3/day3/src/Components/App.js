import React from "react";
import DisplayContainer from "../Containers/DisplayContainer";
import FormContainer from "../Containers/FormContainer";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <FormContainer />
        <DisplayContainer />
      </div>
    );
  }
}
