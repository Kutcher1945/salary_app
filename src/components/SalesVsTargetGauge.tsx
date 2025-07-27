'use client';

import { useMemo } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

export default function SalesVsTargetGauge() {
  const progress = 78;

  const data = useMemo(
    () => [
      { name: 'Progress', value: progress },
      { name: 'Remaining', value: 100 - progress },
    ],
    [progress]
  );

  const COLORS = useMemo(() => ['#66c2a5', '#e0e0e0'], []);

  return (
    <div style={{ height: 300, width: '100%' }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            startAngle={180}
            endAngle={0}
            cx="50%"
            cy="100%"
            innerRadius="70%"
            outerRadius="100%"
            cornerRadius={10}
            paddingAngle={2}
            dataKey="value"
            isAnimationActive={false} // disable animation for performance
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
