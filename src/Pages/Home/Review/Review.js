import React from 'react';
import Grid from '@mui/material/Grid';
import { Card, CardContent,Typography } from '@mui/material';

const Review = ({ review }) => {
    const { name, description, email } = review;
    console.log(review);
    return (
        <Grid item xs={4}>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {email}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Review;