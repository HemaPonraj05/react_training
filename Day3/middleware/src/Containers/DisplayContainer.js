import { connect } from "react-redux";
import Display from "../Components/Display";

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    userDetails: state.userDetails,
    error: state.error
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);
export default DisplayContainer;
