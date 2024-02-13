import * as React from 'react';
import { Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import CommonButton from '../../components/common/commonButton';
import Load from './load';

const Alert = React.forwardRef(function Alert(props, ref){
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export default function BasicSnackbar() {
    const [open, setOpen] = React.useState(false)
    const handleClick = () => {
        setOpen(true)
    }
    const handleClose = (event, reason) => {
        if(reason === 'clickaway'){
            return;
        }
        setOpen(false)
    }
  return (
    <>
        <CommonButton variant='contained' sx={{ left:'35%', marginBottom: '5px', marginTop: '5px' }} onClick={handleClick}>
            Open Success snackBar 
        </CommonButton>
        <Load />
        <Snackbar open={open} onClose={handleClose} autoHideDuration={6000} >
            <Alert onClose={handleClose} severity='success' sx={{width:"100%"}} >
                This is a success Message!
            </Alert>
        </Snackbar>
    </>
  );
}