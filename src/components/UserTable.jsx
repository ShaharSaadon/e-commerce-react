import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';


export function UserTable() {
    const users = useSelector((storeState) => storeState.userModule.users)
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullname', headerName: 'Full name', width: 130 },
        {
            field: 'username',
            headerName: 'User Name',
            width: 90,
        },
    ];

    const rows = users.map((user) => ({
        id: user._id,
        fullname: user.fullname,
        username: user.username
    }));

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
