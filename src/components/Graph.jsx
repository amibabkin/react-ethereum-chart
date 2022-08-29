import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";
import axios from "axios";
// import { useFetching } from "../hooks/useFetching";

const mass = [];
for (let num = 30; num >= 0; num--) {
  mass.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}
function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} CAD</p>
        {/* <p>{JSON.stringify(payload, null, 2)}</p> */}
      </div>
    );
  }
  return null;
}

const getObj = (array) => {
  // const timeArray = [];
  for (const ar of array) {
    console.log(ar);
    // const last = array[array.length - 1];
    // timeArray.push({
    //   date: subDays(parseISO(last.time), 30),
    // });
  }
  // console.log(timeArray);
};

const Graph = () => {
  const [state, setState] = useState();

  const getTrans = async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/CryptoRStar/GasPriceTestTask/main/gas_price.json"
    );
    const answer = response.data;

    for (const eth in answer) {
      const iterable = answer[eth];
      for (const transaction in iterable) {
        setState(iterable[transaction]);
        // console.log(iterable[transaction]);
      }
    }
  };

  useEffect(() => {
    getTrans();
    getObj(state);
  }, []);
  // console.log(state);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <AreaChart
        width={500}
        height={300}
        data={mass}
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

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          tick={{ fill: "#fff" }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          tick={{ fill: "#fff" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
