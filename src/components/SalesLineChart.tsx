'use client';

import { useMemo } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function SalesLineChart() {
  const data = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        date: `Jul ${i + 1}`,
        sales: Math.floor(Math.random() * 1000 + 500),
      })),
    []
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ top: 10, right: 20, bottom: 60, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={-45} textAnchor="end" interval={4} height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            name="Sales ($)"
            stroke="#8884d8"
            strokeWidth={2}
            dot={{ r: 3 }}
            isAnimationActive={false} // disables animation for performance
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
