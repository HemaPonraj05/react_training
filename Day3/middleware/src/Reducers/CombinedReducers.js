import { combineReducers } from "redux";
import userDetailsReducer from "./userDetailsReducer";

const cr = combineReducers({
  user: userDetailsReducer
});

export default cr;
