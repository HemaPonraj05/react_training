import React from "react";
class Form extends React.Component {
  render() {
    console.log("form props.. ", this.props);
    return (
      <div>
        <input type="button" value="Increment" onClick={this.props.increment} />
        &nbsp;
        <input type="button" value="Decrement" onClick={this.props.decrement} />
      </div>
    );
  }
}

export default Form;
