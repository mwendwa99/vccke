import React from 'react';
import { Container, Fade, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

import { colors } from './config/colors';
import { assets } from '../assets';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        flex: 1,
    },
    gridContainer: {
        height: '100%',
        padding: theme.spacing(3),
        backgroundColor: colors.grey,
        backgroundImage: assets.alternatingArrowHead,
    }
}))

const NotFound = () => {
    const classes = useStyle();

    return (
        <Fade in timeout={1000}>
            <Box className={classes.root} >
                <Container maxWidth='lg'>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={12}>
                            <Typography variant='h1' color='primary'>
                                Coming Soon!
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='h2'>
                                The page you are looking for will be updated soon.
                                Perhaps you can return to the &nbsp;
                                <Typography variant='h2' component={Link} to='/'>
                                    homepage
                                </Typography>
                                &nbsp;and see if you can find what you are looking for.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade >
    )
}

export default NotFound
