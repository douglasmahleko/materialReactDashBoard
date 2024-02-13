import React from 'react'
import Grid from '@mui/material/Grid';
import GridWrapper from '../../components/common/grdWrapper';
import ProgressSterpper from '../../components/common/progressSterpper';
import BasicCard from '../../components/basicCard/basicCard';

function Database(){
    return(
        <GridWrapper item xs={8}>
            <BasicCard content={<ProgressSterpper />} />
        </GridWrapper>
    )
}export default Database