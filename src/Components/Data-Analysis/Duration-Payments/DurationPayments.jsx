import React, { useState } from 'react';
import './DurationPayments.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BarChart from '../../BarChart/BarChart';

const data = {
    labels: ['9-10', '10-11', '11-12', '12-13', '13-14', '14-15', '15-16'],
    datasets: [{

        axis: 'y',
        label: 'data',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 7)),
        backgroundColor: ' #4d66f3',//--Primary-Main: #4d66f3;
        //#A6B3F9
        base: 0,
        borderSkipped: false,
        borderRadius: 10,
        barThickness: 12,
        maxBarThickness: 12,

    }, {
        axis: 'y',
        label: 'data',
        data: Array.from({ length: 7 }, () => Math.floor(Math.random() * 7)),
        backgroundColor: ' #A6B3F9',//--Primary-Main: #4d66f3;
        //#A6B3F9
        base: 0,
        borderSkipped: false,
        borderRadius: 10,
        barThickness: 12,
        maxBarThickness: 12,


    }],

}


const options = {

    layout: {
        autoPadding: true
    },
    elements: {
        bar: {
            borderWidth: 1,
        }
    },
    indexAxis: 'y',
    plugins: {
        legend: {
            labels: false
        }
    },
    scales: {

        ticks: {
            display: false,
        },
        title: {
            display: false,
        },
        y: {
            display: true,

        },
        x: {
            display: false
        },
        ticks: {
            display: false,
            // forces step size to be 50 units
            stepSize: 1
        }
    }
}



export default function DurationPayments() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className='DurationPayments'>
            <h3>Duration Payments</h3>
            <div className="buttons">
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </div>
            <div className="content">

                <div className="time">
                    <TabPanel value={value} index={0}>
                        <BarChart options={options} data={data} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Item Three
                    </TabPanel>
                </div>
            </div>
        </div>
    )

}



function TabPanel(props) {
    { console.log(props.value) }
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>{children}</div>


            )}
        </div>
    );
}