import React, { memo, useEffect, useState } from "react";
import type { ListItemType, ChartObject } from "../types";

import LineChartComponent from "./LineChart";
import PiechartComponents from "./PiechartComponents";
import BarChartComponent from "./BarChartComponents";

//Token Usage
const tokenUsageData = [
  { timeStamp: "2023-10-01T10:00:00Z", tokens: 1200 },
  { timeStamp: "2023-10-01T10:05:00Z", tokens: 1500 },
  { timeStamp: "2023-10-01T10:10:00Z", tokens: 1350 },
  { timeStamp: "2023-10-01T10:15:00Z", tokens: 1600 },
];

//Latency Disctibution
const latencyDistributionData = [
  { latency_ms: 100, request_count: 50 },
  { latency_ms: 200, request_count: 120 },
  { latency_ms: 300, request_count: 80 },
  { latency_ms: 400, request_count: 30 },
];

//Cost Analysis
const costAnalysisData = [
  { model_name: "GPT-4", cost: 450.75 },
  { model_name: "Claude 5", cost: 320.5 },
  { model_name: "Llama", cost: 150.25 },
];

interface Props {
  data: ListItemType;
}

const Chart: React.FC<Props> = ({ data }) => {
  const { chartData, chartName } = data;

  const [chartDisData, setChartDisData] = useState<ChartObject>({
    data: [],
    dataName: "",
  });

  //Data Map
  useEffect(() => {
    if (chartData === "tokenUsageData") {
      setChartDisData({ data: tokenUsageData, dataName: "Token Usage Data" });
    }
    if (chartData === "latencyDistributionData") {
      setChartDisData({
        data: latencyDistributionData,
        dataName: "Latency Distribution Data",
      });
    }
    if (chartData === "costAnalysisData") {
      setChartDisData({
        data: costAnalysisData,
        dataName: "Cost Analysis Data",
      });
    }
  }, [chartData]);

  return (
    <>
      {chartName && (
        <div className="align-middle text-center">
          {chartName === "lineChart" ? (
            <LineChartComponent
              data={chartDisData.data}
              dataName={chartDisData.dataName}
            />
          ) : chartName === "piechart" ? (
            <PiechartComponents
              data={chartDisData.data}
              dataName={chartDisData.dataName}
            />
          ) : (
            <BarChartComponent
              data={chartDisData.data}
              dataName={chartDisData.dataName}
            />
          )}
        </div>
      )}
    </>
  );
};

export default memo(Chart);
