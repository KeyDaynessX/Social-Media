import React from 'react';
import s from './Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'react-bootstrap';


const Header = () => {
    return <header className={s.header}>
        <div className={s.header_item}>
        <FontAwesomeIcon icon={faEarthAmericas} style={{color: "#77cb10", height:"80%",}} />
        <h2>Social Media</h2>
        </div>
    </header>
}

export default Header;