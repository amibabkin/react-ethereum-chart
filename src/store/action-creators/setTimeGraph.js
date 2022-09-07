import { getAllTime, getLastMonth } from "../transactionsReducer";
import { fetchTransactions } from "./fetchTransactions";

export const setTimeGraph = (time) => {
  return (dispatch) => {
    if (time === "allTime") {
      console.log("allTime");
      // dispatch(fetchTransactions());
      dispatch(getAllTime());
    }
    if (time === "lastMonth") {
      console.log("lastMonth");
      dispatch(getLastMonth());
    }
  };
};
