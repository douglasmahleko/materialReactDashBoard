import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavBarItems } from './consts/navBarLists';
import { navbarStyles } from './styles';
import ListItemButton from '@mui/material/ListItemButton';
import { useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate()
    return(
        <Drawer
        sx={navbarStyles.drawer}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {mainNavBarItems.map((text, index) => (
            <ListItem key={text.id} >
              <ListItemButton onClick={() => navigate(text.route)}>
                <ListItemIcon sx={navbarStyles.icons}>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.label} sx={navbarStyles.text}/>
                </ListItemButton>
            </ListItem>
          ))}
        </List>
        
      </Drawer>
    )
}export default NavBar