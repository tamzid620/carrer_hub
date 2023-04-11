import React from 'react';
import { AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area } from 'recharts';

const data = [
  {
    "name": "Assignment 1",
    "number": 55,
    "id": "a1"
  },
  {
    "name": "Assignment 2",
    "number": 58,
    "id": "a2"
  },
  {
    "name": "Assignment 3",
    "number": 60,
    "id": "a3"
  },
  {
    "name": "Assignment 4",
    "number": 48,
    "id": "a4"
  },
  {
    "name": "Assignment 5",
    "number": 53,
    "id": "a5"
  },
  {
    "name": "Assignment 6",
    "number": 40,
    "id": "a6"
  },
  {
    "name": "Assignment 7",
    "number": 60,
    "id": "a7"
  }
];

const AreaChartComponent = () => {
  return (
    <div >
        <h1 className='mb-10 mt-10 text-pink-600 text-2xl'>Here's a AreaChart about my Assignment numbers:</h1>
    <AreaChart
      width={600}
      height={400}
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="number" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
    </div>
        
  );
};

export default AreaChartComponent;
