import React from 'react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

import NotFound from './NotFound';
import { colors } from './config/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '30vh',
        [theme.breakpoints.down('sm')]: {
            height: '15vh'
        }
    },
}))

const Donate = () => {
    const classes = useStyles();

    return (
        <Box>
            <Grid className='box background-tint'>
                <Grid className={classes.root}>
                    <Grid className='page1' >
                        <Typography variant='h1' sx={{ color: colors.white }}>Donation Programme</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <NotFound />
        </Box>
    )
}

export default Donate
