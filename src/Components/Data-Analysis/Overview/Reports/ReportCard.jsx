import React from 'react';
import './ReportCard.css';

export default function ReportCard({ label, number, coin = null, percentageOfDecreasingOrIncreasing, DecORInc = 'inc' }) {
    return (
        <div className={`ReportCard ${DecORInc}`}>
            <h5>{label}</h5>
            <h3>{number} {coin ? 'JD' : ''}</h3>
            <h6><span>{`${percentageOfDecreasingOrIncreasing}%`}</span> {DecORInc === 'inc' ? `Increase From Target ` : `Decrease From Target`}</h6>
        </div>
    )
}
