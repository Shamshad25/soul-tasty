import React from 'react';
import { useGlobalContext } from '../context';
import { FaTimes } from 'react-icons/fa';
import { links } from './dataLinks';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const history = useNavigate();
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    const onLinkClick = (url) => {
        closeSidebar();
        history(url);
    }


    return (
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className='links-sidebar'>
                {links.map((link) => {
                    const { id, url, text, icon } = link;
                    return (
                        <li key={id}>
                            <button className='side-btn'
                                //  to={url}

                                onClick={() => onLinkClick(url)}
                            >

                                {icon}&ensp;{text}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </aside>
    );
};

export default Sidebar;
