import axios from "axios";
export default function getUserDetailsAction(url) {
  console.log("getting details...");
  return function(dispatch) {
    // cannot return a function only with thunk
    dispatch({ type: "IS_FETCHING" });
    axios
      .get(url)
      .then(response => {
        dispatch({ type: "FETCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}
