import { Fade, Typography, Container, Grid } from '@mui/material'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { colors } from './config/colors'
import ApplicationForm from './config/ApplicationForm';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.grey,
        textAlign: 'center'
    },
    titleBar: {
        height: '30vh',
        [theme.breakpoints.down('sm')]: {
            height: '15vh'
        }
    }
}))

const Support = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className='box background-tint'>
                <Grid container className={classes.titleBar}>
                    <Grid item className='page1' >
                        <Typography variant='h1' sx={{ color: '#fff' }}>Request Support</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='xl' className={classes.root}>
                    <Grid container>
                        <Grid item sm={12}>
                            <Typography variant='h1' color='primary'>
                                Request Support from Us
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                If this is urgent, please contact us directly at  +254-723-842-810.
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <ApplicationForm
                                nameLabel='name'
                                emailLabel='email'
                                phoneLabel='number'
                                messageLabel='message'
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Support
