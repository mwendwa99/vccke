import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

import NotFound from './NotFound';
import { colors } from './config/colors';

const useStyles = makeStyles(() => ({
    root: {
        height: '30vh',
    }
}))

const Donate = () => {
    const classes = useStyles();

    return (
        <Box>
            <div className='box background-tint'>
                <div className={classes.root}>
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
