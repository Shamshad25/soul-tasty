import React from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import { links } from './dataLinks';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <button className='close-btn' onClick={closeSidebar} style={{ color: "black" }}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links-sidebar'>
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
