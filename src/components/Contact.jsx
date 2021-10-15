import { Fade, Typography, Container, Grid } from '@mui/material'
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import React from 'react';

import { colors } from './config/colors'
import ContactForm from './config/ContactForm';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.grey,
        textAlign: 'center'
    }
}))

const Contact = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className='box background-tint contact-page'>
                <Grid container style={{ height: '30vh' }}>
                    <Grid item className='page1' >
                        <Typography variant='header1' sx={{ color: '#fff' }}>Contact Us</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='xl' className={classes.root}>
                    <Grid container>
                        <Grid item sm={12}>
                            <Typography variant='header1' color='primary'>
                                We would love to hear from you!
                            </Typography>
                            <br />
                            <Typography variant='text2'>
                                Thank you for contacting VCCK Someone from our team will respond to your inquiry within 3 business days.
                                <br />
                                If this is urgent, please contact us directly at  +254-722-894-325.
                            </Typography>
                        </Grid>
                        <Grid sx={{ padding: 5 }} item sm={12}>
                            <ContactForm />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Contact
