import { combineReducers } from "redux";
import { trainsReducer } from "./trainsReducer";
import { speedLimitsReducer } from "./speedLimitsReducer";

export const rootReducer = combineReducers({
  trains: trainsReducer,
  speedLimits: speedLimitsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
