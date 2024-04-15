import React from 'react';
import LineChart from './LineChart';
import PieCharts from './PieChart';


function Report() {
  const lineData = [
    {
      name: 'Jan',
      expense: 4000,
      income: 4450,
    },
    {
      name: 'Feb',
      expense: 3000,
      income: 4500,
    },
    {
      name: 'Mar',
      expense: 3500,
      income: 4000,
    },
    {
      name: 'Apr',
      expense: 3657,
      income: 4457,
    },
    {
      name: 'May',
      expense: 1890,
      income: 4800,
    },
    {
      name: 'June',
      expense: 2390,
      income: 4545,
    },
    {
      name: 'July',
      expense: 7384,
      income: 3932,
    },
    {
      name: 'Aug',
      expense: null,
      income: null,
    },
    {
      name: 'Sep',
      expense: null,
      income: null,
    },
    {
      name: 'Oct',
      expense: null,
      income: null,
    },
    {
      name: 'Nov',
      expense: null,
      income: null,
      // amt: 0,
    },
    {
      name: 'Dec',
      expense: null,
      income: null,
      // amt: 2100,
    },
  ];

  const pieData = [
    {
      name: 'Savings',
      value: 1000,
    },
    {
      name: 'Transportation',
      value: 128,
    },
    {
      name: 'Food',
      value: 400,
    },
    {
      name: 'Shopping',
      value: 200,
    },
    {
      name: 'Rent',
      value: 600,
    },
    {
      name: 'Emergency Fund',
      value: 4800,
    },
  ];



  return (
    <div>
      <div>
      <h2>Income vs Expenses</h2>
      <LineChart  data ={lineData} />
      </div> 
      <div> 
        <h2> Category </h2>
        <PieCharts data ={pieData}/>
      </div>

    </div>

  )
}

export default Report;