import React from 'react'
import GridWrapper from '../../components/common/grdWrapper';
import BasicSnackbar from '../Database/basicSnackbar';
import { Box } from '@mui/material';
import DataTable from './dataTable';
import BasicModal from '../../components/common/basicModal';
import BasicCard from '../../components/basicCard/basicCard';


function Storage(){

    return(
        <GridWrapper item xs={8}>
            <BasicCard header={<BasicSnackbar />} content={<DataTable />} />
        </GridWrapper>
    )
}export default Storage