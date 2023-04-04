import { combineReducers } from "redux";
import { trainsReducer } from "./trainsReducer";
import { errorsReducer } from "./errorsReducer";

export const rootReducer = combineReducers({
  trains: trainsReducer,
  errors: errorsReducer,
})

export type RootState = ReturnType<typeof rootReducer>
