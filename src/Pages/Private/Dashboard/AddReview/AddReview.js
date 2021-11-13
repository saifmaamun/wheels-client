import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        axios.post('https://arcane-badlands-01231.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    console.log(data);
                    reset()
                }
            })
    };
    return (
        <Container>
            <h1>Write A Review</h1>
            <Box sx={{
                bgColor: 'warning.main', width: '70%', mx:'auto'}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width: '70%', marginTop:'10px', padding:'10px'}} {...register("name")} placeholder='Model No' /> 
                    <input style={{width: '70%', marginTop:'10px', padding:'10px'}} {...register("description")} placeholder='Description' />
                    <input style={{width: '70%', marginTop:'10px', padding:'10px'}} value={user.email} {...register("email")} placeholder='Email' />
                    <input style={{width: '70%', marginTop:'10px', padding:'10px'}} type="submit" />
                </form>
            </Box>
        </Container>
    );
};

export default AddReview;