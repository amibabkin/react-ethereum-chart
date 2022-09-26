import React, { useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO } from "date-fns";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { fetchTransactions } from "../../../store/action-creators/fetchTransactions";
import { getTransactions } from "../../../utils/getTransactions";
import {
  allTime,
  lastDay,
  lastMonth,
  lastThreeMonth,
} from "../../../type/timeTypes";
import { eth, gwei } from "../../../type/valueTypes";

const Graph = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.transactions.loading);
  const transactions = useSelector((state) => state.transactions.transactions);
  const valuePrice1 = useSelector((state) => state.value.value);
  const timeGraph = useSelector((state) => state.times.time);
  // timeGraph - состояние времени, которое передаётся в getTransactions, который возвращает нужный массив данных

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  function CustomTooltip({ active, payload, label }) {
    console.log(payload);
    // console.log(payload[0].value);
    if (valuePrice1 === gwei) {
      if (active) {
        return (
          <div className="tooltip">
            <h4>{format(parseISO(label), "d MMM, eee, H:mm, yyyy")}</h4>
            <p>{payload[0].value.toFixed(0)} GWEI</p>
          </div>
        );
      }
    }
    if (valuePrice1 === eth) {
      if (Object.keys(payload).length !== 0) {
        const newPayload = Object.assign({}, payload);
        newPayload[0].value = newPayload[0].payload.ethPrice;
        if (active) {
          return (
            <div className="tooltip">
              <h4>{format(parseISO(label), "d MMM, eee, H:mm, yyyy")}</h4>
              <p>{newPayload[0].value.toFixed(5)} ETH</p>
            </div>
          );
        }
      }
    }

    return null;
  }

  const formatXAxis = (tick) => {
    // формат времени по оси x
    if (timeGraph === lastDay) {
      return format(parseISO(tick), "H:mm");
    }
    if (timeGraph === lastMonth) {
      return format(parseISO(tick), "eee, dd");
    }
    if (timeGraph === allTime) {
      return format(parseISO(tick), "MMM, dd");
    }
    if (timeGraph === lastThreeMonth) {
      return format(parseISO(tick), "MMM, dd");
    }
  };

  const customInterval = () => {
    // интервалы тиков по оси x
    if (timeGraph === lastDay) {
      let interval = 0;
      return interval;
    }
    if (timeGraph === lastMonth) {
      let interval = 13;
      return interval;
    }
    if (timeGraph === allTime) {
      let interval = 300;
      return interval;
    }
    if (timeGraph === lastThreeMonth) {
      let interval = 90;
      return interval;
    }
  };

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      {loading ? (
        <Loader />
      ) : (
        <AreaChart
          width={500}
          height={300}
          data={getTransactions(timeGraph, transactions)}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid opacity={0.1} vertical={false} />

          {valuePrice1 === gwei ? (
            <Area
              dataKey="gasPrice"
              name="gasPrice"
              stroke="#2451B7"
              fill="url(#color)"
            />
          ) : (
            <Area
              dataKey="ethPrice"
              name="ethPrice"
              stroke="#2451B7"
              fill="url(#color)"
            />
          )}

          <XAxis
            dataKey="time"
            tick={{ fill: "#fff" }}
            axisLine={false}
            tickLine={false}
            interval={customInterval()}
            tickFormatter={formatXAxis}
            // tickFormatter={(str) => {
            //   const date = parseISO(str);
            //   if (date.getDate() % 7 === 0) {
            //     return format(date, "MMM, d");
            //   }
            //   return "";
            // }}
          />
          <YAxis
            tick={{ fill: "#fff" }}
            tickLine={false}
            axisLine={false}
            tickFormatter={(number) =>
              valuePrice1 === gwei
                ? `${number.toFixed(0)}`
                : `${number.toFixed(5)}`
            }
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      )}
    </ResponsiveContainer>
  );
};

export default Graph;
