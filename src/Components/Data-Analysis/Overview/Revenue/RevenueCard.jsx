import React from 'react';
import './RevenueCard.css';
import BarChart from '../../../BarChart/BarChart';


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
                <BarChart options={options} data={data} />
            </div>
        </div>
    )
}
