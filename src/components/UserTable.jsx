import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { loadUsers } from '../store/actions/user.actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export function UserTable() {
    const users = useSelector((storeState) => storeState.userModule.users)
    const dispatch = useDispatch()
    useEffect(() => {
        console.log('loading...')
        dispatch(loadUsers())
    }, [])

    const rows = users.map((user) => ({
        id: user._id,
        fullname: user.fullname,
        username: user.username
    }));

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'fullname', headerName: 'Full name', width: 130 },
        {
            field: 'username',
            headerName: 'User Name',
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
