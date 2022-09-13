import React, { useState } from 'react';
import './MenaCard.css';


export default function MenaCard({ label, description, index, image }) {
    const [display, setDisplay] = useState(null);
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const [display3, setDisplay3] = useState(false);

    const [rotate, setRotate] = useState(null);
    const [rotate1, setRotate1] = useState('hide');
    const [rotate2, setRotate2] = useState('hide');
    const [rotate3, setRotate3] = useState('hide');


    const showHandel = (e, index) => {
        e.preventDefault();
        switch (index) {
            case 1:
                !display1 ? setRotate1('hide') : setRotate1('show');
                setDisplay1(!display1);
                setDisplay(display1);
                setRotate(rotate1);
                break;
            case 2:

                !display2 ? setRotate2('hide') : setRotate2('show');
                setDisplay2(!display2)
                setDisplay(display2);
                setRotate(rotate2);
                break;
            case 3:
                !display3 ? setRotate3('hide') : setRotate3('show');
                setDisplay3(!display3)
                setDisplay(display3);
                setRotate(rotate3);
                break;
            default:
                break;
        }
        // console.log(index);
    }

    return (
        <div className='MenaCard'>
            <div className='btn' onClick={(e) => showHandel(e, index)} >
                <span>{label}</span>
                <span className={`material-symbols-outlined expand-more ${rotate}`}>expand_more
                </span>
            </div>
            <div className={`Description ${display}`}>
                <p>{description}</p>
                <img src={image} alt="image" />
            </div>
        </div>
    )
}
