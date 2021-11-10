import { Button, linkClasses } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    return (
        <div>
            <Link to='/home'>Back To Home</Link>
            <Product/>
            </div>
        
    );
};

export default Products;