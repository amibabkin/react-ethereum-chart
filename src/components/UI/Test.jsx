import React from "react";
import { useSelector } from "react-redux";

const Test = () => {
  const price = useSelector((state) => state.price.value);
  console.log(price);
  return <div></div>;
};

export default Test;
