import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const data = [
  { day: "Mon", production: 20 },
  { day: "Tue", production: 35 },
  { day: "Wed", production: 40 },
  { day: "Thu", production: 30 },
  { day: "Fri", production: 50 },
];

const ProductionChart = () => {
  return (

    <LineChart
      width={500}
      height={300}
      data={data}
    >

      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="day" />
      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="production"
        stroke="#16A34A"
        strokeWidth={3}
      />

    </LineChart>

  );
};

export default ProductionChart;