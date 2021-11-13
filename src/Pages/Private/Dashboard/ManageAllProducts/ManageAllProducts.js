import { Button, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const ManageAllProducts = () => {
    const { user, isLoading } = useAuth();
    // console.log('user',user.email);
    const [products, setProducts] = useState([])
    // console.log('purcheased items', purcheasedItems);
    useEffect(() => {
        fetch('https://arcane-badlands-01231.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products]);

    const handleDelete = id => {
        const url = `https://arcane-badlands-01231.herokuapp.com/products/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                }
            })
    }
    return (
        <Container>
            <h1>All Products</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Remove</TableCell>
                        </TableRow>
                        {products.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{product.name}</TableCell>
                                <TableCell align="right">{product.hints}</TableCell>
                                <TableCell align="right">${product.price}</TableCell>
                                <TableCell component="th" scope="row">
                                    <img style={{width: '100%'}} src={product.img} alt="" />
                                </TableCell>
                                <TableCell align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(product._id)}>Remove</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ManageAllProducts;