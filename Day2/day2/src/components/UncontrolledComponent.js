import React from "react";

class UncontrolledComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      textArea: "",
      check: false
    };
    this.submitForm2 = this.submitForm2.bind(this);
  }

  submitForm2() {
    const submitValues = {
      textVal: this.textArea.value,
      radioVal: this.radioBtn.value
    };
    console.log("submitted ", submitValues);
  }

  render() {
    return (
      <div>
        <form>
          <textArea
            ref={node => {
              this.textArea = node;
            }}
            defaultValue="text"
          />
          <br />
          <input
            type="radio"
            ref={node => {
              this.radioBtn = node;
            }}
            defaultChecked={true}
          />
          <br />
          <input type="button" value="submit" onClick={this.submitForm2} />
        </form>
      </div>
    );
  }
}

export default UncontrolledComponent;
