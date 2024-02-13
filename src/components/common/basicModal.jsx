import Modal from '@mui/material/Modal';
import CommonButton from './commonButton';
import { Typography } from "@mui/material"
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

function BasicModal({open, onClose, title, subtitle, content, validate}){
    // const [values, setvalues] = useState(defaultInputValues)
    const style = {
        modal:{
            height:330,
            width:400,
            p:4,
            top:"30%",
            left:"40%",
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center',  
        },
        buttons:{
            display:'flex',
            justifyCenter:'end'
        }
    } 
    const addUser = (data) => {
        console.log(data)
    }
    return(
        <Modal sx={style.modal} 
            open={open} >
            <Box zIndex={3}
                height={300} 
                bgcolor="background.paper"
                p={3} 
                borderRadius={5} 
                width={420} 
                >
                <Typography 
                    variant='h4'
                    textAlign='center' >
                    {title}
                </Typography>
                <Typography 
                    variant='h6'
                    textAlign='center' sx={{mt:2}} >
                    {subtitle}
                </Typography>
                    {content}
                <Box sx={{mt:-3}}>
                    <CommonButton onClick={validate} variant='contained' >Submit</CommonButton>
                    <CommonButton onClick={onClose}>Cancel</CommonButton>
                </Box>
            </Box>
        </Modal>
    )
}export default BasicModal