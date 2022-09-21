import { allTime, lastMonth } from "../type/timeTypes";
// функция возвращает нужный массив транзакций - за всё время, за последний месяц и тд
export const setTime = (time, transactions) => {
  if (time === allTime) {
    return transactions;
  }
  if (time === lastMonth) {
    return setLastMonth(transactions);
  }
};

const setLastMonth = (transactions) => {
  let newArr = [...transactions];
  newArr = newArr.filter((obj) =>
    obj.time.includes(newArr.at(-1).time.substring(0, 7))
  );
  return newArr;
};
