import Input from '@mui/material/Input';
import SearchIcon from '@mui/icons-material/Search';
import { Box } from '@material-ui/core';

function SearchBar({onChange, placeholder, searchBarWidth}){
    return(
        <Box sx={{display:'flex', alignItems:"center"}}>
            <SearchIcon sx={{marginRight:'10px'}} />
            <Input
                onChange={onChange}
                placeholder={placeholder}
                sx={{width:searchBarWidth, fontSize:'1.1rem', color: 'rgba(0, 0, 0, 0.6)'}} 
                disableUnderline
            />
        </Box>
    )
}export default SearchBar