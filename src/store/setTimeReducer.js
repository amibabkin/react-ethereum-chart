const defaultState = {
  time: "allTime",
};

const SET_LAST_MONTH = "SET_LAST_MONTH";
const SET_ALL_TIME = "SET_ALL_TIME";

export const setTimeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_LAST_MONTH:
      return { ...state, time: action.payload };
    case SET_ALL_TIME:
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

export const setAllTime = (payload) => ({
  type: SET_ALL_TIME,
  payload,
});

export const setLastMonth = (payload) => ({
  type: SET_LAST_MONTH,
  payload,
});
