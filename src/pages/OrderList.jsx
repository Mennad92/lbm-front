import * as React from 'react';
import orderService from '../services/orderService';
import { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

export default function OrderList() {
    const [isFetched, setIsFetched] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!isFetched) {
            const fetchOrders = async () => {
                try {
                    const response = await orderService.getOrders();
                    setOrders(response.data);
                } catch (err) {
                }
            };

            fetchOrders();
            setIsFetched(true);

        }
    }, [isFetched]);

    return (
        <>
            <Container>
                <h2 className="text-center p-5 fs-1">Vos commandes</h2>
                {orders.length > 0 ? (
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Numéro de commande</TableCell>
                                    <TableCell>Statut</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <>
                                        <TableRow
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">{order['uuid']}</TableCell>
                                            <TableCell>{order['status']}</TableCell>
                                        </TableRow>
                                    </>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>) : (
                    <p className="text-center m-3">Vous n'avez pas encore passé de commande chez nous.</p>
                )
                }

            </Container>

        </>
    );
}
