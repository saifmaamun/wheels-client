import { Container, Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


//link style
const navStyle = {
    textDecoration: "none",
    color: "black",
    fontSize: "34px",
    fontWeight: "bold",
    padding: "50px 50px",
    borderRadius:"15px 50px",
    height: "50px",
    backgroundColor:"#f25202"
}
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Container>
            <Box sx={{ mt:-10, mb:10}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    
                    <Grid item xs={2} sm={4} md={3}>
                        <Link to='/product' style={navStyle}>Racing</Link>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                        <Link to='/product'  style={navStyle}>Geep</Link>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                        <Link to='/product'  style={navStyle}>Sports</Link>
                        </Grid>
                        <Grid item xs={2} sm={4} md={3}>
                        <Link to='/product'  style={navStyle}>Luxerious</Link>
                        </Grid>
                </Grid>
            </Box>
                </Container>
            <Products />
            <h3>User Review</h3>
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;