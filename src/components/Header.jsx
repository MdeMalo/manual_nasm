import React from 'react';
import '../styles/Header.css';
import banner from '../assets/banner.png';

const Header = () => {
    return (
            <img src={banner} alt="Banner" className='BannerImg' />
    );
};

export default Header;
