import { Grid } from "@material-ui/core"

function GridWrapper({children}){
    const gridStyles = {
        marginLeft:'320px',
        backgroundColor:"#eaeff1", 
        padding: '48px 32px', 
        position: 'relative',
        minHeight: 'calc(100vh - 166px)',
        top:"30px"
    }
    return(
        <Grid item xs={12} sx={gridStyles}>
            {children}
        </Grid>
    )
}export default GridWrapper