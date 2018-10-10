import connect from "react-redux/lib/connect/connect";
import Form from "../Components/Form";
import { incrementAction, decrementAction } from "../Actions/counterSActions";

function mapDispatchToProps(dispatch) {
  return {
    increment: () => {
      dispatch(incrementAction());
    },
    decrement: () => {
      dispatch(decrementAction());
    }
  };
}
const FormContainer = connect(
  null,
  mapDispatchToProps
)(Form);
export default FormContainer;
