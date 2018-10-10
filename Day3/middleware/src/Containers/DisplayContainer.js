import { connect } from "react-redux";
import Display from "../Components/Display";

function mapStateToProps(state) {
  return {
    fetching: state.user.fetching,
    userDetails: state.user.userDetails,
    error: state.user.error
  };
}

const DisplayContainer = connect(mapStateToProps)(Display);
export default DisplayContainer;
