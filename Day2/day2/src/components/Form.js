import React from "react";

function Form(props) {
  return (
    <form>
      <input
        type="button"
        value="Increment"
        onClick={() => {
          props.incrHandler();
        }}
      />
      <input
        type="button"
        value="Decrement"
        onClick={() => {
          props.decrHandler();
        }}
      />
    </form>
  );
}

export default Form;
