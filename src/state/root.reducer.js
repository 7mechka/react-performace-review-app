import { combineReducers } from "redux";
import { userInfoReducer } from "./userInfo/userInfo.reducer";

export const combineReducer = combineReducers({
    userInfo: userInfoReducer,
})