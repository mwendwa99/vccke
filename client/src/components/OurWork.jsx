import { AccountBalance, DinnerDining, FoodBank, Launch, SportsSoccer } from '@mui/icons-material'
import { Container, Fab, Fade, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor';
import { Link } from 'react-router-dom';

import { QuiltedImageList } from './config/QuiltedImageList';
import { assets } from '../assets';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    titleBar: {
        height: '30vh',
        [theme.breakpoints.down('sm')]: {
            height: '15vh'
        }
    }
}))

const OurWork = () => {
    const [active, setActive] = useState(false);
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box>
                <Grid maxWidth='xl' className='box background-tint'>
                    <Grid className={classes.titleBar}>
                        <Grid className='page1' >
                            <Typography variant='h1' sx={{ color: '#fff' }}>VCCK's Work</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Container maxWidth='xl' className='our-work__container' >
                    <Grid container className='' >
                        <Grid item sm={6} >
                            <Typography variant='h1' color='primary'>Our Objectives</Typography>
                            <br />
                            <Typography align='left' variant='body1'>
                                We focus on the following key objectives:
                                <ul>
                                    <li>Undertaking research to develop sustainale solutions to eradicating poverty.</li>
                                    <li>Support children access basic, quality education and early childhood development.</li>
                                    <li>Support children with mental health and physical health issues.</li>
                                    <li>Support children access food and nutrition.</li>
                                    <li>Advocate against child abuse including Female Genital Mutilation.</li>
                                    <li>Supporting Entrepreneurship and Innovation.</li>
                                </ul>
                            </Typography>
                        </Grid>
                        <Grid item sm={6} style={{ padding: '1rem' }} >
                            <img
                                src={assets.vcckMeeting}
                                width="100%"
                                height="100%"
                                alt="donation" />
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='lg' className='our-work__container--programs' >
                    <Grid gap={3} container className='page3__programs'>
                        <Grid item sm={6}>
                            <Typography variant='h1' color='secondary'> VCCK Programs</Typography>
                            <br />
                            <Typography align='justify' variant='body1'>
                                When we first started working in 2020, we took a straightforward approach.
                                In the developing world, we supplied medical supplies and equipment to children homes.
                                <br />
                                <br />
                                However, through our journey, we have learned a lot and expanded the scope and reach of our programs because,
                                at the end of the day, we think that WHERE you live should not dictate WHETHER you live. VCCK now offers a
                                variety of long-term solutions to nation-wide health challenges and issues.
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className='page3__programs--buttons' >
                            <Fab component={Link} to='/coming-soon' sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <SportsSoccer sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Sports Events
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab component={Link} to='/coming-soon' sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <FoodBank sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Cookouts
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab component={Link} to='/coming-soon' sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <AccountBalance sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Fundraisers
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab component={Link} to='/coming-soon' sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <DinnerDining sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Dinners
                                </Typography>
                                <Launch />
                            </Fab>
                        </Grid>
                    </Grid>
                </Container>
                <VizSensor onChange={(isVisible) => setActive(isVisible)}>
                    <Fade in={true} timeout={100} unmountOnExit={active}>
                        <Container maxWidth='lg' style={{ padding: '1rem' }} >
                            <Typography variant='h1' color='primary'>Our ongoing programme at Kariadudu, Nairobi</Typography>
                            <QuiltedImageList />
                        </Container>
                    </Fade>
                </VizSensor>
            </Box>
        </Fade>
    )
}

export default OurWork
