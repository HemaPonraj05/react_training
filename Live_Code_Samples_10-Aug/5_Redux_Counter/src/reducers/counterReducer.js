function counterReducer(prevState = { count: 0 }, action) {
  let newState;

  switch (action.type) {
    case "INCREMENT":
      newState = { ...prevState, count: prevState.count + 1 };
      break;
    case "DECREMENT":
      newState = { ...prevState, count: prevState.count - 1 };
      break;
    default:
      newState = { ...prevState };
      break;
  }
  return newState;
}

export default counterReducer;
