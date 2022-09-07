import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { transactionsReducer } from "./transactionsReducer";

export const store = createStore(
  transactionsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
