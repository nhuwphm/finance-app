import React from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';

const COLORS = {
    'Savings': '#74a4e3',
    'Transportation': '#ff6188',
    'Food': '#0be595',
    'Shopping': '#ffc34d',
    'Rent': '#ffea00',
    'Emergency Fund': '#da96ff',
  };

const PieCharts = ({ data }) => {
    return (
        <PieChart width={1000} height={350}>
            <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} fill="#8884d8" label>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    )
}

export default PieCharts;
