import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadOrders } from '../store/actions/order.actions'
import { DataGrid } from '@mui/x-data-grid';


export function OrdersTable() {
    const orders = useSelector((storeState) => storeState.orderModule.orders)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadOrders())
    }, [])

    const rows = orders.map((order) => ({
        id: order._id,
        buyer: order.user,
        createdAt: order.createdAt
    }));

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'buyer', headerName: 'Buyer', width: 130 },
        {
            field: 'createdAt',
            headerName: 'createdAt',
            width: 90,
        },
    ];

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}
