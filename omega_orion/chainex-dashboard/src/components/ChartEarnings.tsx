import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 3000 },
  { month: 'Feb', value: 4000 },
  { month: 'Mar', value: 3200 },
  { month: 'Apr', value: 5000 },
  { month: 'May', value: 6500 },
  { month: 'Jun', value: 6750 },
];

 const ChartEarnings = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#3FB185" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
}
export default ChartEarnings
