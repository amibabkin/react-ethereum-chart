import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { transactionsReducer } from "./transactionsReducer";
import { setTimeReducer } from "./setTimeReducer";
import { setValueReducer } from "./setValueReducer";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  times: setTimeReducer,
  value: setValueReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
