export const navbarStyles = {
    drawer:{
        width:320,
        flexShrink:0,
        '& .MuiDrawer-paper':{
            width:320,
            boxSizing:'border-box',
            backgroundColor:'#101f33',
            color:'rgba(255, 255, 255, 0.7)'
        },
        '& .Mui-selected':{
            color:'red',
        },
    },
    icons : {
        marginLeft:'20px',
        color: 'rgba(255, 255, 255, 0.7)!important'
    },
    text:{
        '& span':{
            fontSize:'16px',
            fontWeight:'600',
            marginLeft:'-10px'
        }
    }
}