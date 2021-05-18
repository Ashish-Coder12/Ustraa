import React from 'react'
import "./Navbar.css"
import { AiTwotoneBell, AiOutlineSearch } from 'react-icons/ai';
import { MdShoppingCart } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="https://d1ilnltdtrvmj1.cloudfront.net/storeLogos/ustraa-cashback-and-coupon-offers-12604860.png" alt=""/>
            </div>
            <div className="search-input">
                <div className="icon"><AiOutlineSearch/></div>
                <input type="text" placeholder="Search for Products"/>
            </div>
            <div className="nav-links">
                <button className="links"><AiTwotoneBell/></button>
                <button className="links"><MdShoppingCart/></button>
                <button className="links"><FaUserCircle/></button>
                <button className="help-button">HELP ?</button>

            </div>
        </nav>
    )
}

export default Navbar
