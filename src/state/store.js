
import { createStore } from "redux";
import { combineReducer } from "./root.reducer";

const store = createStore(combineReducer);

export default store;