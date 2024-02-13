import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../basicMenu/basicMenu';
import { useState } from 'react';

function NotificationBell({iconColor}){
    const notifications = [
        {
            id : 0,
            label : 'First notifications'
        },
        {
            id : 2,
            label : 'Second notifications'
        },
    ]
    const newNoti = `you have ${notifications.length} notifications!`
    const NoNoti = 'no new notifications'
    const [open, setOpen] = useState(false)
    const [anchorel, setAnchorEl] = useState(null)
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    
    return(
        <div>
            <Tooltip title={ notifications.length ? newNoti : NoNoti }>
                <IconButton 
                    color={iconColor}
                    onClick={notifications.length ? handleOpen : null}
                    anchorel={anchorel}
                >
                    <Badge color='error' badgeContent={notifications.length}>
                            <NotificationsNoneIcon  />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu 
                open={open}
                handleClose={handleClose}
                anchorel={anchorel}
                menuItems={notifications}
            />
        </div>
    )
}export default NotificationBell