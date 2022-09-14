import React from 'react';
import ReportCard from './Reports/ReportCard';
import RevenueCard from './Revenue/RevenueCard';
import './Overview.css';

const data1 = {
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
const data2 = {
    labels: Array.from(Array(12).keys()),
    datasets: [{
        label: 'data',
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 12)),
        backgroundColor: '#6cbaa1',
        base: 0,
        borderSkipped: false,
        borderRadius: 10,
        barThickness: 12,
        maxBarThickness: 12,

    }],

}


export default function Overview() {
    return (
        <div className='Overview'>
            <div data-aos="fade-left" data-aos-duration="1000" className="Reports">
                <h3>Reports Overview</h3>
                <div className='content'>
                    <ReportCard label={'Gross Volume'} number={`100,550.20`} coin={'JD'} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'Net Volume'} number={`106,500.88`} coin={'JD'} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'New Costumers'} number={`48.054`} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'Successful Paymants'} number={`48000`} percentageOfDecreasingOrIncreasing="2" DecORInc='inc' />
                </div>
            </div>
            <div className='Revenues'>
                <RevenueCard label={'Monthly Median Revenue'} totalSummation={`7,844.91`} chartData={data1} />
                <RevenueCard label={'Monthly Median Revenue'} totalSummation={`7,844.91`} chartData={data2} />
            </div>
        </div>
    )
}
