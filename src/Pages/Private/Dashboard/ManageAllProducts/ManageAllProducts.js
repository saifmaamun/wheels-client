import { Card, CardActions, CardContent, CardMedia, Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ManageAllProducts = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])

    return (
        <Container >
            <Grid sx={{ mt: 5 }} container spacing={2}>
                {
                    cars.map(car =>
                        <div
                            key={car._id}
                            car={car}
                        >
                            <Grid item xs={10}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={car.img}
                                        alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {car.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {car.hints}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            Price: Starts From ${car.price}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </div>)
                }
            </Grid>

        </Container>
    );
};

export default ManageAllProducts;