import { Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';
import Header from '../../Shared/Header/Header';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const [purchase, setPurchase] = useState({})
    const { name, hints, img, price } = purchase;
    const { id } = useParams();

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://arcane-badlands-01231.herokuapp.com/purcheased', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully')
                    // history.push('/mytrips')
                }
            })
    }

    const history = useHistory()
    const { user } = useAuth();
    const { displayName, email } = user;


    useEffect(() => {
        fetch(`https://arcane-badlands-01231.herokuapp.com/details/${id}`)
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
                            <h1>Please Fill in</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input value={displayName} {...register('userName',{ required: true })} /> <br />
                                <input value={email} {...register("email",{ required: true })} /> <br />
                                <input value={name} {...register("productName", { required: true })} /> <br />
                                <input value={hints} {...register("details", { required: true })} /> <br />
                                <input value={price} {...register("price", { required: true })} /> <br />
                                <input {...register("address", { required: true })} placeholder='Address' /> <br />
                                <input  {...register("number", { required: true })} type='number' placeholder='Phone Number' /> <br />
                                {errors.exampleRequired && <span>This field is required</span>} <br />

                                <input type="submit" />
                            </form>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default Purchase;