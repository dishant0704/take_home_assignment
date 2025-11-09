// import React from 'react'
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', value: 60 },
  { name: 'Feb', value: 21 },
  { name: 'Mar', value: 58 },
  { name: 'Apr', value: 90 },
  { name: 'May', value: 10 },
];

const ChartSpending = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" fill="#3FB185" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ChartSpending
