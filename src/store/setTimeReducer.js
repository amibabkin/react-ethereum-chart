import { allTime } from "../type/timeTypes";

const defaultState = {
  time: allTime,
};

const SET_LAST_MONTH = "SET_LAST_MONTH";
const SET_ALL_TIME = "SET_ALL_TIME";
const SET_LAST_DAY = "SET_LAST_DAY";
const SET_LAST_THREE_MONTH = "SET_LAST_THREE_MONTH";

export const setTimeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LAST_DAY:
      return { ...state, time: action.payload };
    case SET_LAST_MONTH:
      return { ...state, time: action.payload };
    case SET_ALL_TIME:
      return { ...state, time: action.payload };
    case SET_LAST_THREE_MONTH:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export const setLastDayAction = (payload) => ({
  type: SET_LAST_DAY,
  payload,
});

export const setAllTimeAction = (payload) => ({
  type: SET_ALL_TIME,
  payload,
});

export const setLastMonthAction = (payload) => ({
  type: SET_LAST_MONTH,
  payload,
});

export const setLastThreeMonthAction = (payload) => ({
  type: SET_LAST_THREE_MONTH,
  payload,
});
