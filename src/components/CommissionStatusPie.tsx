'use client';

import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

export default function CommissionStatusPie() {
  const data = useMemo(
    () => [
      { name: 'Paid', value: 6200 },
      { name: 'Pending', value: 1800 },
    ],
    []
  );

  const COLORS = useMemo(() => ['#a6cee3', '#1f78b4'], []);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="80%"
            fill="#8884d8"
            label
            isAnimationActive={false} // disable animation for performance
          >
            {data.map((entry, index) => (
              <Cell key={`slice-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
