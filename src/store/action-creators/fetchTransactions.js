import axios from "axios";
import {
  addTransactionsAction,
  addTransactionsAccessAction,
  addTransactionsErrorAction,
} from "../transactionsReducer";
import { formattingTimeToISO } from "../../utils/formattingTimeToISO";
import { addEthPrice } from "../../utils/addEthPrice";

export const fetchTransactions = () => {
  return async (dispatch) => {
    try {
      dispatch(addTransactionsAction());
      const response = await axios.get(
        "https://raw.githubusercontent.com/amibabkin/gasPrice/main/gas_price.json"
      );
      const answer = response.data;
      for (const eth in answer) {
        const iterable = answer[eth];
        for (const transaction in iterable) {
          formattingTimeToISO(iterable[transaction]);
          addEthPrice(iterable[transaction]);
          dispatch(addTransactionsAccessAction(iterable[transaction]));
        }
      }
    } catch (e) {
      dispatch(addTransactionsErrorAction(e));
    }
  };
};
