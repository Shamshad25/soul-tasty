import React, { useState, useRef, useEffect } from "react";
import { FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';
import { useGlobalContext } from "../context";

export default function Navbar() {
    const { openSidebar } = useGlobalContext();

    const [showLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);

    const activeStyle = {
        color: 'white',
    }
    return (
        <nav className="navbar">
            <div className="nav-center">
                <Link to='/'>
                    <img src={logo} alt='sweeet-tooth logo' className='logo' />

                </Link>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className="nav-links" ref={linksRef}>
                        <li>
                            <NavLink style={(navData) => navData.isActive ? activeStyle : {}}  to='/'>home</NavLink>
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
                    <button onClick={openSidebar} className='sidebar-toggle'>
                        <FaBars />
                    </button>
                </div>
            </div>
        </nav >
    );
};