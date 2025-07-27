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

export default function CommissionsBarChart() {
  const data = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => ({
        week: `Week ${i + 1}`,
        commissions: Math.floor(Math.random() * 500 + 100),
      })),
    []
  );

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 10, right: 20, bottom: 60, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" angle={-15} textAnchor="end" interval={0} height={60} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="commissions"
            name="Commission ($)"
            fill="#6c5ce7"
            barSize={40}
            radius={[4, 4, 0, 0]}
            isAnimationActive={false} // improves performance
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
