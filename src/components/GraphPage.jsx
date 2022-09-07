import React from "react";
import Graph from "./UI/graph/Graph";
import PriceValueSelect from "./UI/select/PriceValueSelect";
import SetTimeSelect from "./UI/select/SetTimeSelect";

const GraphPage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "flex" }}>
        <PriceValueSelect />
        <SetTimeSelect />
      </div>
      <Graph />
    </div>
  );
};

export default GraphPage;
