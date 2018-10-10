function counterReducer(prevState = { count: 0 }, action) {
  let newState;
  switch (action.type) {
    case "INCR":
      newState = { ...prevState, count: prevState.count + 1 };
      break;
    case "DECR":
      newState = { ...prevState, count: prevState.count - 1 };
      break;
    default:
      newState = { ...prevState };
      break;
  }
  console.log("prevstate.. ", prevState);
  console.log("action.. ", action);
  console.log("newstate.. ", newState);
  console.log("-----------------------------");
  return newState;
}

export default counterReducer;
