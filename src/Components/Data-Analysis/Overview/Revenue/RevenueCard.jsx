import React from 'react';
import './RevenueCard.css';
import BarChart from '../../../BarChart/BarChart';
import 'aos/dist/aos.css';



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

export default function RevenueCard({ label, totalSummation, chartData }) {

    return (
        <div className='RevenueCard'>
            <h3>{label}</h3>
            <div data-aos-duration="2000" data-aos="fade-left" className='RevenueContent'>
                <h3>{totalSummation}<span>JOD</span></h3>
                <BarChart options={options} data={chartData} />
            </div>
        </div>
    )
}
