import React from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';

const Reviews = () => {
    return (
        <div>
            <Link to='/home'>Back To Home</Link>
            <h1>reviews</h1>
            <Review/>
        </div>
    );
};

export default Reviews;