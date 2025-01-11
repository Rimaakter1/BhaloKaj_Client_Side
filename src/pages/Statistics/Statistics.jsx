import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement, ArcElement } from 'chart.js';

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    ArcElement
);

const statisticsData = {
    volunteerGrowthThisYear: [50, 65, 75, 80, 110, 150, 180, 200, 210, 225, 240, 250],
    eventsAttendedByMonth: [10, 12, 15, 18, 20, 22, 28, 30, 35, 38, 40, 42],
};

const Statistics = () => {
    const [data, setData] = useState(statisticsData);

    useEffect(() => {
        setTimeout(() => {
            setData(statisticsData);
        }, 1000);
    }, []);

    const growthData = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                label: 'Volunteer Growth (Monthly)',
                data: data.volunteerGrowthThisYear,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
            }
        ]
    };

    const eventsData = {
        labels: [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
        datasets: [
            {
                label: 'Events Attended (Monthly)',
                data: data.eventsAttendedByMonth,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            }
        ]
    };

    return (
        <div className="container dark:bg-gray-800 ">
            <div className='py-14 md:w-10/12 w-11/12 mx-auto'>
                <h1 className="text-3xl font-bold mb-8 dark:text-white text-center">Volunteer Statistics and Reports</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="graph-card bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-center dark:text-white">Volunteer Growth Over the Year</h3>
                        <Line data={growthData} options={{ responsive: true }} />
                    </div>

                    <div className="graph-card bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4 text-center dark:text-white">Events Attended by Month</h3>
                        <Bar data={eventsData} options={{ responsive: true }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
