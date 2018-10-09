import React from "react";

class ControlledComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      textArea: "",
      check: false
    };

    this.textChanged = this.textChanged.bind(this);
    this.radioClicked = this.radioClicked.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  textChanged(ev) {
    this.setState({ textArea: ev.target.value });
  }

  radioClicked(ev) {
    this.setState({ check: ev.target.checked });
  }

  submitForm() {
    const submitValues = {
      textVal: this.state.textArea,
      radioVal: this.state.radioVal
    };
    console.log("submitted ", submitValues);
  }

  render() {
    return (
      <div>
        <form>
          <textArea onChange={this.textChanged}> </textArea> <br />
          <input
            type="radio"
            checked={this.state.check}
            onChange={this.radioClicked}
          />
          <br />
          <input type="button" value="submit" onClick={this.submitForm} />
        </form>
      </div>
    );
  }
}

export default ControlledComponent;
