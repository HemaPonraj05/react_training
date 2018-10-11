import axios from "axios";
export function getDepartmentDetailsAction(url) {
  console.log("getting details...");
  return function(dispatch) {
    // can return a function only with thunk
    dispatch({ type: "IS_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", deptDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}

export function selectedDeptId(id) {
  console.log("selected id..", id);
  return function(dispatch) {
    dispatch({
      type: "DEPT_SELECTED",
      dept_id: id
    });
  };
}
