import React from 'react';
import './Partners.css';
import Carousel from 'react-elastic-carousel';
import mercuryBank from '../../assets/mercury-bank.png';
import stripe from '../../assets/stripe.png';
import myStartup from '../../assets/my-startup.png';
import injaz from '../../assets/injaz.jpg';


const items = [
    { id: 1, image: mercuryBank, },
    { id: 2, image: stripe, },
    { id: 3, image: myStartup, },
    { id: 4, image: injaz, },
    { id: 5, image: mercuryBank, },
    { id: 6, image: stripe, },
    { id: 7, image: myStartup, },
    { id: 8, image: injaz, },
    { id: 9, image: mercuryBank, },
    { id: 10, image: stripe, },
    { id: 11, image: myStartup, },
    { id: 12, image: injaz, },
    { id: 13, image: mercuryBank, },
    { id: 14, image: stripe, },
    { id: 15, image: myStartup, },
];
export default function Partners() {

    const breakPionts = [
        { width: 858, itemsToShow: 3 },
        { width: 952, itemsToShow: 4 },
        { width: 1000, itemsToShow: 5 },

    ];

    return (
        <div className="Partners">
            <Carousel breakPoints={breakPionts}>
                {items.map(item => <div className='PartnerCard' key={item.id}><img src={item.image} alt={item.id} /></div>)}
            </Carousel>
        </div>

    )
}
