export default function deptDetailsReducer(
  prevState = { fetching: false, deptDetails: [], error: "", deptId: "" },
  action
) {
  let newState;
  switch (action.type) {
    case "IS_FETCHING":
      newState = {
        ...prevState,
        fetching: true,
        deptDetails: [],
        error: "",
        deptId: ""
      };
      break;
    case "FETCH_SUCCESS":
      newState = {
        ...prevState,
        fetching: false,
        deptDetails: action.deptDetails,
        error: "",
        deptId: ""
      };
      break;
    case "FETCH_ERROR":
      newState = {
        ...prevState,
        fetching: false,
        deptDetails: [],
        error: action.error,
        deptId: ""
      };
      break;
    case "DEPT_SELECTED":
      newState = { ...prevState, deptId: action.dept_id };
      break;
    default:
      newState = { ...prevState };
      break;
  }
  return newState;
}
