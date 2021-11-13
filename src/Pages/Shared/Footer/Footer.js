import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ mt: 5, py: 5, backgroundColor: 'black', color: 'white' }}>

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <h4>Explore</h4>
                    <h5>Contact Us</h5>
                    <h5>About Us</h5>
                    <h5>Terms And Police</h5>
                    <h5>Tradings</h5>
                </Grid>
                <Grid item xs={4}>
                    <h4>Shop Address</h4>
                    <h5>House # 4</h5>
                    <h5>Road # 21</h5>
                    <h5>Sector # 7</h5>
                    <h5>Uttara Model Town</h5>
                </Grid>
                <Grid item xs={4}>
                    <h4>Contact Us</h4>
                    <h5>Phone: 02 8956517/8919659/8963298</h5>
                    <h5>Mobile: 01711 070369/01819 2</h5>
                    <h5>Fax: 02 8919659</h5>
                    <h5>Email: b726r6jms4@temporary-mail.net</h5>
                </Grid>
            </Grid>
            <p >© 2021 Audi of America. All rights reserved.</p>
        </div>
    );
};

export default Footer;