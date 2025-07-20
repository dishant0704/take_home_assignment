import React, { useEffect, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  Tooltip,
  XAxis,
  LineChart as ReLineChart, // renamed to avoid conflict
} from "recharts";
import { fetchPromise } from "../utility";

interface Props {
  data: any[]; // Or a better typed structure if known
  dataName: string;
}

const LineChartComponent: React.FC<Props> = ({ data, dataName }) => {
  const [chaData, setChaData] = useState([]);

  let dataKey_1: string = "";
  let dataKey_2: string = "";

  if (data.length > 0) {
    dataKey_1 = Object.keys(data[0])[0];
    dataKey_2 = Object.keys(data[0])[1];
  }

  const fetchTokenUsage = async (data: any) => {
    const rData = await fetchPromise(data);
    return await rData;
  };

  useEffect(() => {
    fetchTokenUsage(data).then((response: any) => {
      return setChaData(response);
    });
  }, [data]);

  return (
    <>
      <h2 className="py-4">
        Line Chart : <b>{dataName}</b>
      </h2>
      <div className="m-auto w-fit py-4">
      {chaData.length === 0 ? (
        "Loading..."
      ) : (
        
        <ReLineChart
          width={500}
          height={300}
          data={chaData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={dataKey_1} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey_2}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </ReLineChart>
      )}
      </div>
    </>
  );
};

export default LineChartComponent;
