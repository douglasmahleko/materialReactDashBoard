import React, { useEffect, useState } from 'react'
import './App.css';
import NavBar from './components/navBar/navBar';
import Grid from '@mui/material/Grid';
import './index.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Authentication from './pages/Authentication/authentication'
import Database from './pages/Database/databse'
import Storage from './pages/Storage/storage'
import Hosting from './pages/Hosting/hosting'
import Functions from './pages/Functions/functions'
import MachineLearning from './pages/MachineLearning/machineLearning'
import Header from './components/header/header';
import { Box } from '@mui/material';

function App({children}) {
  const [title, setTitle] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const parsedTitle = location.pathname.replace(/\W/g, ' ')
    setTitle(parsedTitle)
  }, [location])
  return (
    <Grid container>
      <Box item display='flex' > 
        <NavBar />
      </Box>
      
      <Header title={title} />
      
      <div >
        {children}
      </div>
    </Grid>
 
  );
}

export default App;
