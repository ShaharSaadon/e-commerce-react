import React from 'react'

import { UserTable } from '../components/UserTable'
import { OrdersTable } from '../components/OrdersTable.jsx'


export default function AdminPanel() {


    return (
        <div>

            <UserTable />
            <OrdersTable />
        </div>


    )
}
