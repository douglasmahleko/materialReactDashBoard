import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import * as React from 'react';

function BasicMenu({ anchorel, handleClose, open, menuItems }){
    
    return(

      <Menu
        anchorel={anchorel}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >        
        {
          menuItems.map((item) => (
            <MenuItem key={item.id} onClick={handleClose}> {item.label} </MenuItem>
          ))
        }
      </Menu>

    )
}export default BasicMenu