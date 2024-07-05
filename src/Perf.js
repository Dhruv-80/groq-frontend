import React from 'react';
import Chart from './Components/Chart';
import './styles/Perf.css';
import StatComponent from './StatComponent';
const Perf = () => {
  const chartOptions = {
    series: [
      {
        name: 'Performance',
        data: [10, 20, 30, 40],
      },
    ],
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: ['Llama', 'Mistral', 'Gemma', 'Other'],
      },
    },
  };

  return (
    <div className="perf-page">
      <div className="perf-container">
        <div className="perf-label">Performance Chart</div>
      <div className='stats'><StatComponent/></div>
        <Chart options={chartOptions.options} series={chartOptions.series} type="bar" height={200} width={400} />
      </div>
    </div>
  );
};

export default Perf;
