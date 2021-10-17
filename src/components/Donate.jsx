import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import NotFound from './NotFound';
import { colors } from './config/colors'

const Donate = () => {
    return (
        <Box>
            <div className='box background-tint'>
                <div style={{ height: '30vh' }}>
                    <div className='page1' >
                        <Typography variant='header1' sx={{ color: colors.white }}>Donation Programme</Typography>
                    </div>
                </div>
            </div>
            <NotFound />
        </Box>
    )
}

export default Donate
