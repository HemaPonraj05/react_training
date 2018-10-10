import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <input
          type="text"
          size={40}
          defaultValue="https://api.github.com/users/gaeron"
          ref={node => {
            this.textBoxVal = node;
          }}
        />
        <br />
        <br />
        <input
          type="button"
          value="Get user details.. "
          onClick={() => {
            this.props.getUserDetails(this.textBoxVal.value);
          }}
        />
        <hr />
      </form>
    );
  }
}
export default Form;
