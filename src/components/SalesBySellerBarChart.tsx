'use client';

import { useMemo } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts';

export default function SalesBySellerBarChart() {
  const data = useMemo(
    () => [
      { seller: 'Alice', sales: 8200 },
      { seller: 'Bob', sales: 6100 },
      { seller: 'Charlie', sales: 4300 },
    ],
    []
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 60, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="seller" angle={-10} textAnchor="end" height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="sales"
            name="Sales ($)"
            fill="#3b82f6"
            barSize={40}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false} // disable animation to improve performance
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
