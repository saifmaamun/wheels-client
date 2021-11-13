import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Header from '../Shared/Header/Header';

const Details = () => {
    const { id } = useParams();
    const [car, setCar] = useState({})
    const { name, description, img, price, _id } = car;
    useEffect(() => {
        fetch(`https://arcane-badlands-01231.herokuapp.com/details/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
    }, [])
    return (
        <div>

            <Header/>
        <Container sx={{ mx: 'auto', mt: 5, borderRadius: 10, p: 3, bgcolor: 'warning.main' }}>
            <Box sx={{ flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={4}>
                        <img style={{ width: '100%',borderRadius:10 }} src={img}></img>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <Card >
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h3" component="div">
                                        {name}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        <u>Details About {name}</u>
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        {description}
                                    </Typography>
                                    <Typography variant="h6" component="div">
                                        Price: Starts From ${price}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                        <Link to={`/purchase/${id}`} >
                            <Button>Purchase</Button>
                        </Link>
                                
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Container>
        </div>
    );
};

export default Details;