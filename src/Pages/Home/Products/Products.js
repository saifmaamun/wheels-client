
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data.slice(0, 6)))
    }, [])

    return (
        <Container >
            <Grid sx={{ mt: 5 }} container spacing={2}>
                {
                    cars.map(car =>
                        <Product
                            key={car._id}
                            car={car}
                        ></Product>)
                }
            </Grid>
            
        </Container>

    );
};

export default Products;