import { Container, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setreviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setreviews(data))
    }, [])

    return (
        <Container sx={{mb:5,pb:5}}>
            <h1>All Reviews</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Model </TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Review</TableCell>
                        </TableRow>
                        {reviews.map((review) => (
                            <TableRow
                                key={review._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{review.name}</TableCell>
                                <TableCell align="right">{review.email}</TableCell>
                                <TableCell align="right">{review.description}</TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>

    );
};

export default Reviews;