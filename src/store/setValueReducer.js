import { gwei } from "../type/valueTypes";

const defaultState = {
  value: gwei,
};

const SET_GWEI_VALUE = "SET_GWEI_VALUE";
const SET_ETH_VALUE = "SET_ETH_VALUE";

export const setValueReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_GWEI_VALUE:
      return { ...state, value: action.payload };
    case SET_ETH_VALUE:
      return { ...state, value: action.payload };
    default:
      return state;
  }
};

export const setGweiValueAction = (payload) => ({
  type: SET_GWEI_VALUE,
  payload,
});

export const setEthValueAction = (payload) => ({
  type: SET_ETH_VALUE,
  payload,
});
