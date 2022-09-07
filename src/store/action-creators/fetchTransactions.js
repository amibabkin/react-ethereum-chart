import axios from "axios";
import {
  addTransactions,
  addTransactionsAccess,
  addTransactionsError,
} from "../transactionsReducer";
import { formatTime } from "../../utils/formatTime";

export const fetchTransactions = () => {
  return async (dispatch) => {
    try {
      dispatch(addTransactions());
      const response = await axios.get(
        "https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json"
      );
      const answer = response.data;
      for (const eth in answer) {
        const iterable = answer[eth];
        for (const transaction in iterable) {
          formatTime(iterable[transaction]);
          dispatch(addTransactionsAccess(iterable[transaction]));
        }
      }
    } catch (e) {
      dispatch(addTransactionsError(e));
    }
  };
};
