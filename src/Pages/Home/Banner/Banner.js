import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../images/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img style={{width: '100%'}} src={banner} alt="" />
        </div>
    );
};

export default Banner;