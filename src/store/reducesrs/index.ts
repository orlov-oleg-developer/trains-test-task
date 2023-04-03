import { combineReducers } from "redux";
import { trainsReducer } from "./trainsReducer";

export const rootReducer = combineReducers({
  trains: trainsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
