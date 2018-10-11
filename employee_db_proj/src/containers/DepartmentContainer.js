import { connect } from "react-redux";
import DeptList from "../components/department/DepartmentList";
import {
  getDepartmentDetailsAction,
  selectedDeptId
} from "../actions/getDepartmentDetailsAction";

function mapStateToProps(state) {
  return {
    fetching: state.fetching,
    deptDetails: state.deptDetails,
    error: state.error,
    deptId: state.deptId
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getDeptDetails: url => {
      dispatch(getDepartmentDetailsAction(url));
    },
    selectedDeptId: id => {
      dispatch(selectedDeptId(id));
    }
  };
}

const DepartmentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeptList);
export default DepartmentContainer;
