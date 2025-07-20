import React, { useEffect, useState } from 'react'
import { Cell, Pie, PieChart } from 'recharts';
import type { PieLabelProps } from 'recharts/types/polar/Pie';
import { fetchPromise } from '../utility';

interface Props {
  data: any[]; // Or a better typed structure if known
  dataName: string;
}

const PiechartComponents: React.FC<Props> = ({ data, dataName }) => {

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const[chaData, setChaData] = useState([])  

  let dataKey_1: string = "";
  let dataKey_2: string = "";

  
  if(data.length > 0){
    dataKey_1 = Object.keys(data[0])[0]
    dataKey_2 = Object.keys(data[0])[1]
  }

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: PieLabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);  
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};
  const fetchTokenUsage = async (data: any) => {   
       const rData= await fetchPromise(data)
       return await rData
      };
  
      useEffect(()=>{
        fetchTokenUsage(data).then((response:any) => {return setChaData(response);})
      },[data])

  return (
    <>
    <h2 className="py-4">Pie Chart : <b>{dataName}</b></h2>
    <div className="m-auto w-fit py-4">

    {chaData.length === 0? "Loading...":(
    <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey={dataKey_2}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      )}
    </div>
    </>
    )
}

export default PiechartComponents
