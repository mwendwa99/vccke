import { Fade, Typography, Container } from '@mui/material'
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
            <Box>
                <div maxWidth='xl' className='box background-tint'>
                    <div style={{ height: '30vh' }}>
                        <div className='page1' >
                            <Typography variant='header1' sx={{ color: '#fff' }}>Contact Us</Typography>
                        </div>
                    </div>
                </div>
                <Container maxWidth='xl' className={classes.root}>
                    <Typography variant='header1' color='primary'>
                        We would love to hear from you!
                    </Typography>
                    <ContactForm />
                </Container>
            </Box>
        </Fade>
    )
}

export default Contact
