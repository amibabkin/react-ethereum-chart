import {
  setAllTimeAction,
  setLastMonthAction,
  setLastDayAction,
  setLastThreeMonthAction,
} from "../setTimeReducer";
import {
  allTime,
  lastMonth,
  lastDay,
  lastThreeMonth,
} from "../../type/timeTypes";

export const setTimeGraph = (time) => {
  return (dispatch) => {
    if (time === allTime) {
      dispatch(setAllTimeAction(allTime));
    }
    if (time === lastMonth) {
      dispatch(setLastMonthAction(lastMonth));
    }
    if (time === lastDay) {
      dispatch(setLastDayAction(lastDay));
    }
    if (time === lastThreeMonth) {
      dispatch(setLastThreeMonthAction(lastThreeMonth));
    }
  };
};
