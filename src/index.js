import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar/navBar';
import Authentication from './pages/Authentication/authentication'
import Database from './pages/Database/databse'
import Storage from './pages/Storage/storage'
import Hosting from './pages/Hosting/hosting'
import Functions from './pages/Functions/functions'
import MachineLearning from './pages/MachineLearning/machineLearning'
import { ThemeProvider } from '@mui/material/styles';
import { dashBoardThem } from './dashboardTheme';
import { Box } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <ThemeProvider theme={dashBoardThem}>
          <BrowserRouter>
            <App>
              <Box>
                <Routes>
                    <Route path="/authentication" element={<Authentication />} />
                    <Route path="/database" element={<Database />} />
                    <Route path="/storage" element={<Storage />} />
                    <Route path="/hosting" element={<Hosting />} />
                    <Route path="/functions" element={<Functions />} />
                    <Route path="/machine-learning" element={<MachineLearning />} />
                </Routes>
              </Box>
            </App>
          </BrowserRouter>
        </ThemeProvider>
  </React.StrictMode>
);
