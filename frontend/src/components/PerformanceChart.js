import React from 'react';
import{Line} from 'react-chartjs-2';

const PerformanceChart = ({performance}) => {
    const data = {
        labels: performance.dates || [],
        datasets: [
            {
                label: 'Portfolio Value',
                data: performance.values || [],
                borderColor: 'blue',
                backgroundColor: 'rgba(173, 216, 230, 0.2)',

            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {beginAtZero: true},
        },
    };

    return (
        <section className="performance-chart">
            <h2>Performance Chart</h2>
            <Line data={data} options={options} />
        </section>
    );
};

export default PerformanceChart;