'use client';

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
  { day: "Du", sales: 300 },
  { day: "Se", sales: 200 },
  { day: "Ch", sales: 220 },
  { day: "Pa", sales: 350 },
  { day: "Ju", sales: 225 },
  { day: "Sh", sales: 195 },
  { day: "Ya", sales: 160 },
];

export default function SalesChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">📈 Haftalik Sotuvlar</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#3B82F6"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
