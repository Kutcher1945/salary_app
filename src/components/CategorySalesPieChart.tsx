'use client';

import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

export default function CategorySalesPieChart() {
  const data = useMemo(
    () => [
      { name: 'Shirts', value: 3200 },
      { name: 'Pants', value: 2400 },
      { name: 'Accessories', value: 1600 },
    ],
    []
  );

  const COLORS = useMemo(() => ['#fbb4ae', '#b3cde3', '#ccebc5'], []);

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
            innerRadius="40%"
            outerRadius="75%"
            label
            isAnimationActive={false} // improves performance
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend layout="horizontal" verticalAlign="bottom" align="center" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
