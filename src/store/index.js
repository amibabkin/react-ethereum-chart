import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { transactionsReducer } from "./transactionsReducer";
import { setTimeReducer } from "./setTimeReducer";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  times: setTimeReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
