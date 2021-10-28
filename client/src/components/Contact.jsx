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
    },
    titleBar: {
        height: '30vh',
        [theme.breakpoints.down('sm')]: {
            height: '15vh'
        }
    }
}))

const Contact = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className='box background-tint'>
                <Grid container className={classes.titleBar}>
                    <Grid item className='page1' >
                        <Typography variant='h1' sx={{ color: '#fff' }}>Contact Us</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='xl' className={classes.root}>
                    <Grid container>
                        <Grid item sm={12}>
                            <Typography variant='h1' color='primary'>
                                We would love to hear from you!
                            </Typography>
                            <br />
                            <Typography variant='body1'>
                                Thank you for contacting VCCK Someone from our team will respond to your inquiry within 3 business days.
                                <br />
                                If this is urgent, please contact us directly at  +254-732-855-686.
                            </Typography>
                        </Grid>
                        <Grid sx={{ padding: 5 }} item sm={12}>
                            <ContactForm nameLabel='name' emailLabel='email' messageLabel='message' />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Contact
