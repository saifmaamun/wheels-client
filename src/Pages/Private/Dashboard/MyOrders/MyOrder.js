import { Button, Container } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = () => {
    const { user,isLoading } = useAuth();
    // console.log('user',user.email);
    const [purcheasedItems, setPurcheasedItems] = useState([])
    // console.log('purcheased items', purcheasedItems);
    useEffect(() => {
        fetch('http://localhost:5000/purcheased')
            .then(res => res.json())
            .then(data => {
                    // console.log('data',data);
                    
                    const added = data.filter(items => items.email === user.email)
                    // console.log(added);
                    setPurcheasedItems(added)
                
            })
    }, [purcheasedItems]);

    const handleDelete = id => {
        console.log(id)
        const url = `http://localhost:5000/purcheased/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('this will be deleted')
                    const remaining = purcheasedItems.filter(purcheasedItem => purcheasedItem._id !== id)
                    setPurcheasedItems(remaining)
                }
            })
    }
    return (
        <Container>
            <h1>{user.displayName}'s Purchase</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone Number</TableCell>
                            <TableCell align="right">Price (g)</TableCell>
                        </TableRow>
                        {purcheasedItems.map((purcheasedItem) => (
                <TableRow
                                key={purcheasedItem._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {purcheasedItem.userName}
                    </TableCell>
                    <TableCell align="right">{purcheasedItem.productName}</TableCell>
                    <TableCell align="right">{purcheasedItem.address}</TableCell>
                    <TableCell align="right">{purcheasedItem.number}</TableCell>
                    <TableCell align="right">{purcheasedItem.price}</TableCell>
                                <TableCell align="right"><Button className="btn btn-dark fw-bold" onClick={() => handleDelete(purcheasedItem._id)}>Remove</Button></TableCell>
                </TableRow>
            ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default MyOrder;


