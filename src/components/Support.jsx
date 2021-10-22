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
    }
}))

const Support = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className='box background-tint'>
                <Grid container style={{ height: '30vh' }}>
                    <Grid item className='page1' >
                        <Typography variant='header1' sx={{ color: '#fff' }}>Request Support</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='xl' className={classes.root}>
                    <Grid container>
                        <Grid item sm={12}>
                            <Typography variant='header1' color='primary'>
                                Request Support from Us
                            </Typography>
                            <br />
                            <Typography variant='text2'>
                                If this is urgent, please contact us directly at  +254-722-894-325.
                            </Typography>
                        </Grid>
                        <Grid sx={{ padding: 5 }} item sm={12}>
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
