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
        seller_payme_id: order.seller_payme_id,
        sale_price: order.sale_price,
        currency: order.currency,
        product_name: order.product_name,
        transaction_id: order.transaction_id,
        installments: order.installments,
        market_fee: order.market_fee,
        sale_email: order.sale_email,
        sale_name: order.sale_name,
        sale_payment_method: order.sale_payment_method,
        layout: order.layout,
        language: order.language
    }));


    const columns = [
        { field: 'seller_payme_id', headerName: 'Seller Payme ID', width: 200 },
        { field: 'sale_price', headerName: 'Price', width: 120 },
        { field: 'currency', headerName: 'Currency', width: 120 },
        { field: 'product_name', headerName: 'Product Name', width: 200 },
        { field: 'transaction_id', headerName: 'Transaction ID', width: 200 },
        { field: 'installments', headerName: 'Installments', width: 150 },
        { field: 'market_fee', headerName: 'Market Fee', width: 150 },
        { field: 'sale_email', headerName: 'Email', width: 200 },
        { field: 'sale_name', headerName: 'User Name', width: 200 },
        { field: 'sale_payment_method', headerName: 'Payment Method', width: 200 },
        { field: 'layout', headerName: 'Layout', width: 150 },
        { field: 'language', headerName: 'Language', width: 150 }
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
