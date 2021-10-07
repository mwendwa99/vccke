import { AccountBalance, DinnerDining, FoodBank, Launch, SportsSoccer } from '@mui/icons-material'
import { Container, Fab, Fade, Grid, Typography } from '@mui/material'
import React, { useState } from 'react';
import VizSensor from 'react-visibility-sensor';

import { QuiltedImageList } from './config/QuiltedImageList';

const OurWork = () => {
    const [active, setActive] = useState(false);

    return (
        <Fade in timeout={1000}>
            <div className='our-work'>
                <Container maxWidth='xl' className='box background-tint'>
                    <div style={{ height: '30vh' }}>
                        <div className='page1' >
                            <Typography variant='header1' sx={{ color: '#fff' }}>VCCK's Work</Typography>
                        </div>
                    </div>
                </Container>
                <Container maxWidth='xl' className='our-work__container' >
                    <Grid container className='' >
                        <Grid item sm={6} >
                            <Typography variant='header1' color='primary'>Our Objectives</Typography>
                            <br />
                            <Typography align='justify' variant='header2'>
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
                                src="https://images.pexels.com/photos/2305192/pexels-photo-2305192.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                width="100%"
                                height="100%"
                                alt="" />
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='xl' className='our-work__container--programs' >
                    <Grid gap={3} container className='page3__programs'>
                        <Grid item sm={6}>
                            <Typography variant='header1' color='secondary'> VCCK Programs</Typography>
                            <br />
                            <Typography align='justify' variant='text2'>
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
                            <Fab sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <SportsSoccer sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Sports Events
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <FoodBank sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Cookouts
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
                                <AccountBalance sx={{ mr: 1 }} fontSize='medium' />
                                <Typography sx={{ mr: 'auto', textTransform: 'capitalize' }} variant='body1'>
                                    Fundraisers
                                </Typography>
                                <Launch />
                            </Fab>
                            <Fab sx={{ mt: 1 }} variant='extended' color="primary" aria-label="soccer">
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
                            <QuiltedImageList />
                        </Container>
                    </Fade>
                </VizSensor>
            </div>
        </Fade>
    )
}

export default OurWork
