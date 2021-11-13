import { Container } from '@mui/material';
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
    const { user } = useAuth();
    // console.log('user',user.email);
    const [purcheasedItems, setPurcheasedItems] = useState([])
    console.log('purcheased items', purcheasedItems);
    useEffect(() => {
        fetch('http://localhost:5000/purcheased')
            .then(res => res.json())
            .then(data => {
                // console.log('data',data);
                const added = data.filter(items => items.email === user.email)
                console.log(added);
                setPurcheasedItems(added)
            })
    }, []);

    // const handleDelete = id => {
    //     console.log(id)
    //     const url = `http://localhost:5000/purcheased${id}`
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 alert('this will be deleted')
    //                 const remaining = purcheasedItems.filter(purcheasedItem => purcheasedItem._id !== id)
    //                 setPurcheasedItems(remaining)
    //             }
    //         })
    // }
    return (
        <div>
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
                </TableRow>
            ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MyOrder;




// <TableContainer component={Paper}>
//     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//             <TableRow>
//                 <TableCell>Dessert (100g serving)</TableCell>
//                 <TableCell align="right">Calories</TableCell>
//                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//             </TableRow>
//         </TableHead>
//         <TableBody>
//             {rows.map((row) => (
//                 <TableRow
//                     key={row.name}
//                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                 >
//                     <TableCell component="th" scope="row">
//                         {row.name}
//                     </TableCell>
//                     <TableCell align="right">{row.calories}</TableCell>
//                     <TableCell align="right">{row.fat}</TableCell>
//                     <TableCell align="right">{row.carbs}</TableCell>
//                     <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//             ))}
//         </TableBody>
//     </Table>
// </TableContainer>








// <div>
//     <h1>{user.displayName}'s Purchase</h1>
//     <Container>
//         {
//             purcheasedItems.map(purcheasedItem => <div
//                 key={purcheasedItem._id}>
//                 <div className="text-start">
//                     <h1>Destination: {purcheasedItem.productName}</h1>
//                     <h5>User Name: {purcheasedItem.userName}</h5>
//                     <h5>User Email: {purcheasedItem.email}</h5>
//                     <h5>Cost: ${purcheasedItem.price}/Per Person  ||  for 1 week</h5>
//                 </div>
//                 {/* <button className="btn btn-dark fw-bold" onClick={() => handleDelete(purcheasedItem._id)}>Remove</button> */}
//             </div>)
//         }
//     </Container>
// </div>















