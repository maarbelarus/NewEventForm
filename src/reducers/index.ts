import { combineReducers } from "redux";
import { resultModalReducer } from "./ResultModal";
import { newEventReducer } from "./NewEvent";

export const mainReducer = combineReducers({
  resultModal: resultModalReducer,
  newEvent: newEventReducer
});
