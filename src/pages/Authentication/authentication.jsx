import React, { useState } from 'react';
import BasicCard from '../../components/basicCard/basicCard';
import SearchBar from '../../components/common/searchBar';
import CommonButton from '../../components/common/commonButton';
import { Box, IconButton, Typography } from '@material-ui/core';
import RefreshIcon from '@mui/icons-material/Refresh';
import GridWrapper from '../../components/common/grdWrapper';
import NewUser from '../../components/common/newUser';

function Authentication(){
    const [open, setOpen] =useState(false)
    const [users, setUsers] = useState([])
    const [searchResults, setSearchResults] = useState(users)

    const headerStyles = {
        wrapper:{
            display:'flex',
            alignItems:"center",            
            justifyContent:'space-between',
            paddingLeft:'20px',
            paddingRight:'20px',
            height:'65px',
            backgroundColor:'#f5f5f5',
            borderBottom:'1px solid rgba(0, 0, 0, 0.12)'
        },
        addUserButton:{
            fontSize:'1.05rem'
        }
    }

    const getHeader = () => {
        const handleSearch = (value) => {
            filterData(value)
        }
        const filterData = (value) => {
            const lowerCasedvalue = value.toLowerCase().trim()
            if(lowerCasedvalue ==="") setUsers(searchResults)
            else{
                const filterdata = searchResults.filter((item) => {
                    return Object.keys(item).some((key) => item[key].toString().toLowerCase().includes(lowerCasedvalue))
                })
                setUsers(filterdata)
            }
        }
        const addUser = () => {
            setOpen(true)
            console.log('click')
        }
        return(
            <Box sx={headerStyles.wrapper}  >
                <SearchBar 
                    placeholder="search by email adress, phone number, or use UID"
                    onChange={(event) => handleSearch(event.target.value)}
                    searchBarWidth='720px'
                />
                <Box >
                    <CommonButton 
                        sx={headerStyles.addUserButton}
                        size='large'
                        variant = 'contained'
                        onClick = {addUser}
                     >
                        Add User
                    </CommonButton>
                    <IconButton > 
                        <RefreshIcon />
                    </IconButton>
                </Box>
            </Box>
        )
    }
    const newUser = (data) => {
        users.push({...data})
        setOpen(false)
    }
    const getContent = () => (
        <>
        {
            users.length ? 
            users.map((user) => (
                <Box sx={{marginBottom : '20px'}} >
                    <Typography>User Id : {user.userId} </Typography>
                    <Typography>Email : {user.email} </Typography>
                    <Typography>Phone Number : {user.phoneNumber} </Typography>
                </Box>
            )) : 
            <Typography 
                align='center'
                sx ={{ fontSize:'1.3rem', 
                margin: '40px 16px', 
                color: 'rgbs(0, 0, 0, 0.6)'
            }}
            >
                No Users for this project
            </Typography>
        }
            
        </>
    )
    
    return(
        <GridWrapper>
            <BasicCard header={getHeader()} content={getContent()}  />
            {/* <BasicModal open={open} onClose={() => setOpen(false)} title="New User" subtitle="Fill out and hit 'submit' button" newUser={newUser} /> */}
            <NewUser open={open} onClose={() => setOpen(false)} />
        </GridWrapper >
    )
}export default Authentication