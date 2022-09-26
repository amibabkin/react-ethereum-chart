import { parseISO, subMonths } from "date-fns";
import { allTime, lastMonth, lastDay, lastThreeMonth } from "../type/timeTypes";
// функция возвращает нужный массив транзакций - за всё время, за последний месяц и тд
// '2022-08-01T00:00:00.000Z' - формат времени
export const getTransactions = (time, transactions) => {
  if (time === allTime) {
    return transactions;
  }
  if (time === lastMonth) {
    return setLastMonth(transactions);
  }
  if (time === lastDay) {
    return setLastDay(transactions);
  }
  if (time === lastThreeMonth) {
    return setLastThreeMonth(transactions);
  }
};

const setLastDay = (transactions) => {
  let newArr = [...transactions];
  newArr = newArr.filter((obj) =>
    obj.time.includes(newArr.at(-1).time.substring(0, 10))
  );
  return newArr;
};

const setLastMonth = (transactions) => {
  let newArr = [...transactions];
  newArr = newArr.filter((obj) =>
    obj.time.includes(newArr.at(-1).time.substring(0, 7))
  );

  return newArr;
};

const setLastThreeMonth = (transactions) => {
  let newArr = [...transactions];
  // дата три месяца назад исходя от даты в последнем объекте массива
  let newDate = subMonths(parseISO(newArr.at(-1).time), 2)
    .toISOString()
    .substring(0, 7);
  // найти первый объект в массиве с нужным месяцем
  let firstObj = newArr.find((obj) => obj.time.includes(newDate));
  newArr = newArr.slice(
    newArr.indexOf(firstObj),
    newArr.indexOf(newArr.at(-1))
  );
  return newArr;
};
