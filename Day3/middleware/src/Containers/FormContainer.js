import { connect } from "react-redux";
import Form from "../Components/Form";
import getUserDetailsAction from "../Actions/getUserDetailsAction"

function mapStateToProps(state) {
  return {};
}

function mapDisptachToProps(dispatch) {
  return {
    getUserDetails: url => {
      dispatch(getUserDetailsAction(url));
    }
  };
}

const FormContainer = connect(
  mapStateToProps,
  mapDisptachToProps
)(Form);
export default FormContainer;
