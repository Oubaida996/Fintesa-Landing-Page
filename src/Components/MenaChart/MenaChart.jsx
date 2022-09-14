import React from 'react';
import './MenaChart.css';
import image from '../../assets/DashboardPage.jpg'
import MenaCard from './MenaCard/MenaCard';
import 'aos/dist/aos.css';

const data = [
    {
        label: 'Dashboard',
        description: 'Visually displayed data at a glance! Dashboard view provides an overview of business reports that is updated every 15 seconds. metrics can be set and business health can be determined accordingly by monitoring performance, analyzing data, creating reports, projecting revenue, and setting future financial targets.'
        , image_url: image,

    }
    , {
        label: 'Live Data',
        description: 'Get advanced charting capabilities at hand! Analyze, track, and report the company’s data in real-time with the help of interactive data visualizations. Get access to critical, actionable and instant insights today.',
        image_url: image,

    },
    {
        label: 'Cash Flow',
        description: 'Cash flow dashboard becomes all too clear at MENACart! Monitor immediate spending power and have access to aggregate data of all cash inflows and outflows during a given period. Measure how well your company manages its cash position through MENACart.',
        image_url: image,

    }
]

export default function MenaChart() {

    // useEffect(() => {
    //     Aos.init({
    //         duration: 20000,
    //     });
    // }, [])


    return (
        <section className='MenaChart' id='MenaChart'>
            {data.map((item, index) => {
                return (<MenaCard key={index} index={index + 1} label={item.label} description={item.description} image_url={item.image_url} />);
            })}
        </section>
    )
}
