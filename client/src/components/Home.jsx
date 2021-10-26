import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Button, Tooltip, Paper, Container, Grid, Fab, Fade } from '@mui/material'
import { AccountBalance, DinnerDining, FoodBank, Launch, SportsSoccer } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

import { assets } from '../assets';
import { colors } from './config/colors';
import ActionAreaCard from './config/ActionAreaCard';

const useStyles = makeStyles((theme) => ({
    mainText: {
        color: colors.white,
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    links: {
        textDecoration: 'none',
    },
}));

function Home() {
    const classes = useStyles();
    const values = [
        {
            name: 'Volunteer',
            image: assets.Volunteer
        },
        {
            name: 'Donate',
            image: assets.Donate
        },
        {
            name: 'Request Support',
            image: assets.SupportMin
        }
    ];

    return (
        <Fade in timeout={1000}>
            <div className='Home' >
                <Parallax
                    bgImage={assets.home}
                    strength={600}
                >
                    <Grid container className='page1__parent'>
                        <Grid item className='page1' >
                            <Typography variant='h1' className={classes.mainText}>Children Deserve the Best</Typography>
                            <br />
                            <br />
                            <Typography variant='h2' align='justify' className={classes.mainText}>
                                The core mission of Vulnerable Children Concern Kenya is to work with our communities to achieve sustainable solutions to ending children poverty.
                            </Typography>
                            <br />
                            <br />
                            <Tooltip title='Coming soon!'>
                                <Button component={Link} to='/coming-soon' size='large' variant='contained' sx={{ mr: 10 }} color='secondary'>
                                    Take Action
                                </Button>
                            </Tooltip>
                            <Button size='large' variant='contained' color='neutral' >
                                <Link className={classes.links} to='/contact'>Contact Us</Link>
                            </Button>
                        </Grid>
                    </Grid>
                </Parallax>
                <Container maxWidth='md' className='page2' >
                    <Grid container className='page2__grid' >
                        <Paper className='page2__grid--paper'>
                            <Typography variant='h1' color='primary'>Our Vision</Typography>
                            <Typography color="secondary" variant='h5'>
                                Improving Children Wellbeing and Reducing Poverty in Kenya
                            </Typography>
                            <br />
                            <Typography align='center' variant='h6'>
                                Children comprise more than half of the monetarily poor population (55%) and nearly half (48%) of
                                the multi-dimensionally poor population. (Kenya National Bureau of Statistics, 2020)
                            </Typography>
                        </Paper>
                    </Grid>
                </Container>
                <Container maxWidth='lg'>
                    <Grid container >
                        <Grid className='page2__card--container' item xs={12}>
                            {
                                values.map((item, id) =>
                                    <ActionAreaCard key={id} pos={id} item={item} />
                                )
                            }
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='lg' >
                    <Grid container className='page2__headline--container'>
                        <Grid item sm={12} className='page2__headline--container-text'>
                            <Typography variant='h1' color={colors.white} >Join #VCCK</Typography>
                            <Typography variant='h5' color={colors.white}>
                                Vulnerable Children Concern Kenya (VCCK) is a non-governmental organization registered in Kenya and
                                is working in five counties namely: Tharakaa Nithi, Meru, Machakos, Nairobi and Kisumu.
                                <br />
                                <br />
                                Join #VCCK to help us reach out to a bigger audience.
                            </Typography>
                            <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                                <Button component={Link} to='coming-soon' size='large'
                                    variant='contained' fullWidth={false} color='secondary' >Learn More</Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth='xl' className='page3' >
                    <Grid container className='page3__programs'>
                        <Grid item sm={6}>
                            <Typography variant='h1' color='secondary'> VCCK Programs</Typography>
                            <br />
                            <Typography variant='h2'>
                                On average we hold semi-annual fundraiser activities where we visit
                                children in various counties to support them.
                            </Typography>
                            <br />
                            <br />
                            <Typography variant='h2'>
                                Each year donors and well-wishers travel with VCCKE to provide food, clothes and support
                                to the vulnerable children accross the country.
                            </Typography>
                        </Grid>
                        <Grid item sm={2.5} className='page3__programs--buttons' >
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
            </div >
        </Fade >
    )
}

export default Home
