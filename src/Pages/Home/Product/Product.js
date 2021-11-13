import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Card, CardActions, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Product = ({ car }) => {
    const { name, hints, img, price, _id } = car;
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {hints.slice(0,80)}
                    </Typography>
                    <Typography variant="h6" component="div">
                        Price: Starts From ${price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link style={{ textDecoration: "none" }} to={`/details/${_id}`}><Button car={car} size="small">Details</Button></Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;