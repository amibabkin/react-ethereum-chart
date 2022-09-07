const defaultState = {
  transactions: [],
  loading: false,
  error: null,
};

const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
const FETCH_TRANSACTIONS_ACCESS = "FETCH_TRANSACTIONS_ACCESS";
const FETCH_TRANSACTIONS_ERROR = "FETCH_TRANSACTIONS_ERROR";
const GET_LAST_MONTH = "GET_LAST_MONTH";
const GET_ALL_TIME = "GET_ALL_TIME";

export const transactionsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS:
      return { ...state, loading: true, error: null, transactions: [] };
    case FETCH_TRANSACTIONS_ACCESS:
      return {
        ...state,
        loading: false,
        error: null,
        transactions: action.payload,
      };
    case FETCH_TRANSACTIONS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        transactions: [],
      };
    case GET_ALL_TIME:
      return { ...state, loading: true, error: null, transactions: [] };
    case GET_LAST_MONTH:
      return {
        ...state,
        transactions: state.transactions.filter((obj) =>
          obj.time.includes(state.transactions.at(-1).time.substring(0, 7))
        ),
      };
    default:
      return state;
  }
};

export const addTransactions = () => ({ type: FETCH_TRANSACTIONS });
export const addTransactionsAccess = (payload) => ({
  type: FETCH_TRANSACTIONS_ACCESS,
  payload,
});
export const addTransactionsError = (payload) => ({
  type: FETCH_TRANSACTIONS_ERROR,
  payload,
});
export const getAllTime = () => ({
  type: GET_ALL_TIME,
});
export const getLastMonth = () => ({
  type: GET_LAST_MONTH,
});
