import React from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebook size={30} color='#4267B2' title="Log in Facebook" />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com',
        icon: <FaTwitter size={30} color='#00acee ' title="Log in Twitter" />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com',
        icon: <FaLinkedin size={30} color=' #0e76a8' title="Log in linkedin" />,
    },
    {
        id: 4,
        url: 'https://www.behance.com',
        icon: <FaBehance size={30} color='#053eff ' title="Log in Behance" />,
    },
];