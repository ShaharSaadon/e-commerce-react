import React, { useEffect } from 'react'
import { useLocation, useRoutes, Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import { Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { OrdersTable } from '../components/Admin/OrdersTable'
import { UserTable } from '../components/Admin/UserTable'

export function AdminPanel() {
    const location = useLocation();
    const currentTab = location.pathname.split("/")[2] || 'orders'; // gets 'orders', 'users' or 'edit' based on URL

    useEffect(() => {
        document.title = `KingSize | Admin`;
    }, [])

    let element;
    switch (currentTab) {
        case 'orders':
            element = <OrdersTable />;
            break;
        case 'users':
            element = <UserTable />;
            break;
        default:
            element = <div>Default</div>; // Add your default component here
    }

    return (
        <div>

            <Tabs value={currentTab} aria-label="admin navigation" sx={{ maxWidth: '100%' }}
            >
                <Tab label="Orders" value="orders" component={Link} to="/admin-panel/orders" />
                <Tab label="Users" value="users" component={Link} to="/admin-panel/users" />
                <Tab label="Add Product" value="edit" component={Link} to="/product/edit" />
            </Tabs>
            {element}
        </div>
    )
}