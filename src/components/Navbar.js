import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

export default function Navbar() {
    const activeStyle = {
        color: '#fff',
    };
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt='sweeet-tooth logo' className='logo' />
                </Link>
                <ul className="nav-links">
                    <li>
                        <NavLink style={(navData) => navData.isActive ? activeStyle : {}} to='/'>home</NavLink>
                    </li>
                    <li>
                        <NavLink style={(navData) => navData.isActive ? activeStyle : {}} to='/menu'>menu</NavLink>
                    </li>
                    <li>
                        <NavLink style={(navData) => navData.isActive ? activeStyle : {}} to='/about'>about us</NavLink>
                    </li>
                    <li>
                        <NavLink style={(navData) => navData.isActive ? activeStyle : {}} to='/contact'>contact us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};