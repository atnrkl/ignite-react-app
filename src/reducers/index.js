import { gamesReducer } from "./gamesReducer";
import { detailReducer } from "./detailReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  games: gamesReducer,
  detail: detailReducer,
});
