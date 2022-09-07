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

const Graph = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading);
  const transactions = useSelector((state) => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);

  function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip">
          <h4>{format(parseISO(label), "eee, hh:mm, d MMM, yyyy")}</h4>
          <p>{payload[0].value.toFixed(0)} GWEI</p>
        </div>
      );
    }
    return null;
  }

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      {loading ? (
        <Loader />
      ) : (
        <AreaChart
          width={500}
          height={300}
          data={transactions}
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
          <Area dataKey="gasPrice" stroke="#2451B7" fill="url(#color)" />
          <XAxis
            dataKey="time"
            tick={{ fill: "#fff" }}
            axisLine={false}
            tickLine={false}
            // tickFormatter={() => {}}
            tickFormatter={(str) => {
              return format(parseISO(str), "dd-hh:mm");
            }}
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
            tickFormatter={(number) => `${number.toFixed(0)}`}
          />
          <Tooltip content={<CustomTooltip />} />
        </AreaChart>
      )}
    </ResponsiveContainer>
  );
};

export default Graph;
