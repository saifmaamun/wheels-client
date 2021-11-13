import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <Container >
            <Grid sx={{ mt: 5 }} container spacing={2}>
                {
                    reviews.map(review =>
                        <Review
                            key={review._id}
                            review={review}
                        >
                        </Review>)
                }
            </Grid>

        </Container>

    );
};

export default Reviews;