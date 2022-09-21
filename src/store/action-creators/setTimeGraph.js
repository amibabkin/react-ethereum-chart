import { setAllTime, setLastMonth } from "../setTimeReducer";
import { allTime, lastMonth } from "../../type/timeTypes";

export const setTimeGraph = (time) => {
  return (dispatch) => {
    if (time === allTime) {
      dispatch(setAllTime(allTime));
    }
    if (time === lastMonth) {
      dispatch(setLastMonth(lastMonth));
    }
  };
};
