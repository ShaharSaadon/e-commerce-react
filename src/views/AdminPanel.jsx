import React, { useEffect } from 'react'
import { loadUsers } from '../store/actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { UserTable } from '../components/UserTable'
import { OrdersTable } from '../components/OrdersTable.jsx'


export default function AdminPanel() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <div>
            <UserTable />
            <OrdersTable />
        </div>


    )
}
