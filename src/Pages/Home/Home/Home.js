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
            <Container >
                <h1>Glims Of Our Cars</h1>
                <Products />
            </Container>
            <Reviews />
            <Footer/>
        </div>
    );
};

export default Home;