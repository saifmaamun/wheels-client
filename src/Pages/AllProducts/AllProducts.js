import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Home/Product/Product';
import Header from '../Shared/Header/Header';

const AllProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <div>
<Header/>
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

                    </div>
    );
};

export default AllProducts;