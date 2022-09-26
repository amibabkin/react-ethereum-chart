import { gwei, eth } from "../../type/valueTypes";
import { setEthValueAction, setGweiValueAction } from "../setValueReducer";

export const setValueGraph = (value) => {
  return (dispatch) => {
    if (value === gwei) {
      dispatch(setGweiValueAction(gwei));
    }
    if (value === eth) {
      dispatch(setEthValueAction(eth));
    }
  };
};
