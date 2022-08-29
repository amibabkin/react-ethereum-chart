import axios from "axios";

export const useFetching = async (callback) => {
  const fetching = async () => {
    try {
      await callback();
    } catch (e) {
      console.log(e);
    }
  };
  return [fetching];
};
