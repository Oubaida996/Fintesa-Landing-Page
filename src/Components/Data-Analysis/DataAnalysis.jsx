import React from 'react'
import './DataAnalysis.css';
import DurationPayments from './Duration-Payments/DurationPayments';
import Overview from './Overview/Overview';
export default function DataAnalysis() {
    return (
        <section className='DataAnalysis'>
            <DurationPayments />
            <Overview />
        </section>
    )
}
