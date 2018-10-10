import React from "react";
import Display from "../Components/Display";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return { val: state.count };
}
const DisplayContainer = connect(mapStateToProps)(Display);
export default DisplayContainer;
