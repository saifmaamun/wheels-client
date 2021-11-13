import { Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Header from '../../Shared/Header/Header';

const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const { name, hints, img, price } = purchase;
    console.log(purchase);
    const { id } = useParams();

    const history = useHistory()
    const { user } = useAuth();
    const { displayName, email } = user;
    console.log(user);


    useEffect(() => {
        fetch(`http://localhost:5000/details/${id}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [])

    return (
        <div>
            <Header />
            <Container sx={{ mx: 'auto', mt: 5, borderRadius: 10, bgcolor: 'warning.main' }}>
                <Box sx={{ flexGrow: 1,py:3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8}>
                            <img style={{ width: '100%', borderRadius: 10 }} src={img}></img>
                            <Card >
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4" component="div">
                                            {name}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {hints}
                                        </Typography>
                                        <Typography variant="h6" component="div">
                                            Price: Starts From ${price}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Purchase;