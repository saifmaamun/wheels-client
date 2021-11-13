import { Container } from '@mui/material';
import React from 'react';

const Vision = () => {
    return (
        <Container style={{ textAlign: 'left', backgroundColor: 'gray', margin: '50px auto', padding: '40px 40px', borderRadius:10}}>
            <h2>Audi Mission, Vision & Values</h2>
            <h4>Audi Mission Statement</h4>
            <p>Audi is an internationally renowned manufacturer of high-quality cars. Our success has been achieved through creativity, commitment and the ability to generate enthusiasm. The wishes and emotions of our customers are the guiding principles behind our every action.</p>

            <h4>Audi Vision Statement</h4>
            <p>The vision of Audi Company is “Audi- the premium brand”. ... Audi products are convincing in its brand values, sportiness, permissiveness and also superiority. The mission statement also plays an important role on the path to lead Audi to become the leading premium brand.
</p>
            <h4>Audi Values</h4>
            <li>
            Digitalization
            </li>
            <li>
            Sustainability
            </li>
            <li>
            Urbanization
            </li>
            <li>
            Integrity
            </li>
            <li>
            Respect
            </li>
            <li>
            Cooperation
            </li>
        </Container>
    );
};

export default Vision;