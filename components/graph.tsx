import React from 'react';

type BarChartProps = {
  data: number[]; // Array of numbers to represent the values for the bars
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  // Calculate maximum value to scale the bars properly
  const maxValue = Math.max(...data);
  
  return (
    <svg width="400" height="200">
      {data.map((value, index) => (
        <rect
          key={index}
          x={index * 100}  // Space between bars
          y={200 - (value / maxValue) * 200}  // Dynamic height based on data value
          width="80" // Width of each bar
          height={(value / maxValue) * 200} // Dynamic height based on data value
          fill="blue" // Bar color
        />
      ))}
    </svg>
  );
};

export default BarChart;
