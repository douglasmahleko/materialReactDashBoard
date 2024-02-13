import Avatar from '@mui/material/Avatar';
import CommonButton from "../common/commonButton"
import NotificationBell from "../notifications/notification"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Tooltip } from '@material-ui/core';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Box from '@mui/material/Box';
 

function Header({title}){
    const headerStyles = {
        wrapper : {
            backgroundColor : "#009be5",
            width:"100%",
            display:"flex",
            flexDirection:"column",
            padding : '20px'
        },
        topRow:{
            display:'flex',
            flexDirection:'row',
            justifyContent:'end',
            alignItems:'center',
            marginlBottom:'20px',
            '*':{
                marginRight:'5px'
            },
        },
        midlerow:{
            display:'flex',
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            marginlBottom:'20px',
            marginLeft:'320px'
        },
        link:{
            fontWeight:500,
            color:'rgba(255, 255, 255, 0.7)',
            "&:hover":{
                color:"#fff",
                cursor:'pointer'
            },
        },
        webButton:{
            marginRight:'5px',
        },
    }
    return(
        <Box sx={headerStyles.wrapper}>
            <Box sx={headerStyles.topRow}>
                <Typography 
                    sx={headerStyles.link}
                >
                    Go to Docs
                </Typography>
                <NotificationBell iconColor='white' badgeContent={3} />
                <Avatar src={require('./dougy.jpg')} alt='me' />
            </Box>
            <Box sx={headerStyles.midlerow}>
                <Typography color="white" variant="h1" >
                        {title}
                </Typography>
                <Box>
                    <CommonButton 
                        variant='outlined'
                        sx={headerStyles.webButton}
                    >
                        Web Setup
                    </CommonButton>
                    <Tooltip title='help' ><IconButton color='white' sx={headerStyles.helpIcon}  > <HelpOutlineIcon /> </IconButton></Tooltip>
                </Box>
            </Box>
        </Box>
    )
}export default Header