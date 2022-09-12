import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <header className='header'>
            <label className="logo" href="#">Fintesa</label>
            <input type="checkbox" id='check' />
            <label htmlFor="check" className='menu'><i className='fas fa-bars'></i></label>
            <nav>
                <a href='#DataAnalysis' >Data Analysis</a>
                <a htmlFor="check" href='#MenaCart' >Mena Cart</a>
                <a htmlFor="check" href='#Partner' >Partner</a>
            </nav>
        </header>
    )
}
