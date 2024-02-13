import { createTheme } from '@mui/material/styles';


export const dashBoardThem = createTheme({
    components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontSize: '0.875rem',
              fontWeight:600,
              borderRadius:8.5,
              textTransform:'none',
              '&.MuiButton-contained':{
                backgroundColor : "#009be5",
                '&:hover':{
                  backgroundColor:"#006db3"
                },
              },
              '&.MuiButton-outlined':{
                color:"#fff",
                borderColor:'rgba(255, 255, 255, 0.7)',
                '&:hover':{
                  backgroundColor: 'rgba(0, 0, 0, 0.04)'
                },
              },
            },
          },
        },
        MuiSvgIcon:{
          styleOverrides:{
            root:{
              fontSize: '1.7rem',
            },
          },
        },
      },
      palette:{
        white :{
          main:'#fff'
        },
      },
      typography:{
        h1:{
          letterSpacing: '0.5px',
          color:'#fff',
          fontWeight:600,
          fontSize:'1.6rem',
          textTransform:'capitalize'
        },
      },
      
})