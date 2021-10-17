import React from 'react';
import { Container, Fade, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { colors } from './config/colors';

const useStyle = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        height: '100%'
    },
    gridContainer: {
        backgroundColor: colors.grey,
        padding: theme.spacing(3)
    }
}))

const NotFound = () => {
    const classes = useStyle();

    return (
        <Fade in timeout={1000}>
            <Box sx={{ height: '25rem' }}>
                <Container maxWidth='lg' className={classes.root}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={12}>
                            <Typography variant='header1' color='primary'>
                                Coming Soon!
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='text1' align='center'>
                                The page you are looking for will be updated soon.
                                Perhaps you can return to the &nbsp;
                            </Typography>
                            <Typography variant='text1' component={Link} to='/'>
                                homepage
                            </Typography>
                            <Typography variant='text1'>
                                &nbsp;and see if you can find what you are looking for.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default NotFound
