import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

import PropTypes from 'prop-types';
const LineChart = ({ data }) => {
  return (
    <AreaChart  width={1200} height={400} data={data} margin={{ top: 15, right: 30, left: 20, bottom: 5 }} >
      <defs>
        <linearGradient id='colorexpense' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#ff3f2e' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#ff3f2e' stopOpacity={0} />
        </linearGradient>
        <linearGradient id='colorincome' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#2c8011' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#2c8011' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip />
      <Area
        type='monotone'
        dataKey='expense'
        stroke='#8884d8'
        fillOpacity={1}
        fill='url(#colorexpense)'
      />
      <Area
        type='monotone'
        dataKey='income'
        stroke='#82ca9d'
        fillOpacity={1}
        fill='url(#colorincome)'
      />
      <Legend />
    </AreaChart>
  );
};

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
};

export default LineChart;