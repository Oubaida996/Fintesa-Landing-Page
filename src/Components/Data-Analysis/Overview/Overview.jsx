import React from 'react';
import ReportCard from './Reports/ReportCard';
import RevenueCard from './Revenue/RevenueCard';
import './Overview.css';

export default function Overview() {
    return (
        <div className='Overview'>
            <div className="Reports">
                <h3>Reports Overview</h3>
                <div className='content'>
                    <ReportCard label={'Gross Volume'} number={`100,550.20`} coin={'JD'} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'Net Volume'} number={`106,500.88`} coin={'JD'} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'New Costumers'} number={`48.054`} percentageOfDecreasingOrIncreasing="2" DecORInc='dec' />
                    <ReportCard label={'Successful Paymants'} number={`48000`} percentageOfDecreasingOrIncreasing="2" DecORInc='inc' />
                </div>
            </div>
            <div className='Revenues'>
                <RevenueCard label={'Monthly Median Revenue'} totalSummation={`7,844.91`} />
                <RevenueCard label={'Monthly Median Revenue'} totalSummation={`7,844.91`} />
            </div>
        </div>
    )
}
