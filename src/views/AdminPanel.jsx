import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'


export default function AdminPanel() {

    useEffect(() => {
        document.title = `KingSize | Admin`;
    }, [])

    return (
        <div>
            <nav>
                <NavLink to="/admin-panel/orders">Orders</NavLink>
                <NavLink to="/admin-panel/users">Users</NavLink>
                <NavLink to="/product/edit">הוסף מוצר</NavLink>
            </nav>
            <Outlet />
        </div>


    )
}
