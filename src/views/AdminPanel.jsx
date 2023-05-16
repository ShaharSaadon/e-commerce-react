import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function AdminPanel() {


    return (
        <div>
            <nav>
                <NavLink to="/admin-panel/orders">Orders</NavLink>
                <NavLink to="/admin-panel/users">Users</NavLink>
            </nav>
            <Outlet />
        </div>


    )
}
