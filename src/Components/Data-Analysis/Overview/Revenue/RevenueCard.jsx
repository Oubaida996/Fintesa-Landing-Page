import React from 'react';
import './RevenueCard.css';

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle


} from 'chart.js';

ChartJS.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle

);

const data = {
    labels: Array.from(Array(12).keys()),
    datasets: [{
        label: 'data',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 12)),
        backgroundColor: ' #4d66f3',//--Primary-Main: #4d66f3;
        //#A6B3F9
        base: 0,
        borderSkipped: false,
        borderRadius: 10,
        barThickness: 12,
        maxBarThickness: 12,

    }],

}

const options = {
    plugins: {
        legend: {
            labels: false
        }
    },
    scales: {
        title: {
            display: false,
        },
        y: {
            display: false
        },
        x: {
            display: false
        },
    }
}

export default function RevenueCard({ label, totalSummation, chartData = null }) {

    return (
        <div className='RevenueCard'>
            <h3>{label}</h3>
            <div className='RevenueContent'>
                <h3>{totalSummation}<span>JOD</span></h3>
                <Bar className='BarChart' options={options} data={data} />
            </div>
        </div>
    )
}
