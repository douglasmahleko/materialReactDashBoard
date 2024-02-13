import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns = [
    { field: 'id', headerName : 'User Id', width :150 },
    { field: 'name', headerName : 'Name', width :150 },
    { field: 'username', headerName : 'Username', width :150 },
]

function DataTable(){

    const [users, setUsers] = useState([])
    const [pageSize, setPageSize] = useState(2)

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setUsers(json))
    }, [])
    return(
        <DataGrid rows={users} columns={columns} loading={!users.length} checkboxSelection
            rowsPerPageOptions={[2,5,10]} pageSize={pageSize} onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
    )
}
export default DataTable