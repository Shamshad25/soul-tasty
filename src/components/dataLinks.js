import React from 'react';
import {
    FaHome,
    FaUserFriends,
    FaFolderOpen,
    FaCalendarAlt,
} from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/home',
        text: 'home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: '/menu',
        text: 'Menu',
        icon: <FaFolderOpen />,
    },
    {
        id: 3,
        url: 'about',
        text: 'About Us',
        icon: <FaCalendarAlt />,
    },
    {
        id: 4,
        url: 'contact',
        text: 'Contact Us',
        icon: <FaUserFriends />,
    },
];

