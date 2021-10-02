import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Button, Paper, Container, Grid, Divider } from '@mui/material'

import { assets, colors } from '../assets';
import Card from './Card';


function Home() {
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
            name: 'Support',
            image: assets.Support
        }
    ]

    return (
        <div className='Home' >
            <Parallax
                bgImage={assets.home}
                strength={500}
                bgImageStyle={{ opacity: '0.8' }}
                blur={{ min: 0, max: 0.5 }}
            >
                <div style={{ height: '100vh' }}>
                    <div className='header__home--component1' >
                        <Typography variant='header1' sx={{ color: '#fff' }}>Children Deserve the Best</Typography>
                        <br />
                        <br />
                        <Typography variant='text1' align='justify' sx={{ color: '#fff' }}>
                            The core mission of Vulnerable Children Concern Kenya is to work with our communities to achieve sustainable solutions to ending children poverty.
                        </Typography>
                        <br />
                        <br />
                        <Button size='large' variant='contained' sx={{ mr: 10 }} color='secondary'>Take Action</Button>
                        <Button size='large' variant='contained' color='neutral' >Contact Us</Button>
                    </div>
                </div>
            </Parallax>
            <Container maxWidth='xl' className='page2' >
                <Grid container  >
                    <Paper className='header__home--component2'>
                        <Typography variant='header1' color='primary'>Our Vision</Typography>
                        <Typography color="secondary" variant='header2'>
                            Improving Children Wellbeing and Reducing Poverty in Kenya
                        </Typography>
                        <br />
                        <Typography align='center' variant='body1'>
                            Children comprise more than half of the monetarily poor population (55%) and nearly half (48%) of
                            the multi-dimensionally poor population. (Kenya National Bureau of Statistics, 2020)
                        </Typography>
                    </Paper>
                </Grid>
            </Container>
            <Container maxWidth='lg'  >
                <Grid container className='page2__card--container'  >
                    <Grid className='page2__card' item sm={12}>
                        {
                            values.map((item, id) =>
                                <Card key={id} pos={id} item={item} />
                            )
                        }
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth='lg' >
                <Grid container className='page2__headline--container'>
                    <Grid item sm={12} className='page2__headline--container-text'>
                        <Typography variant='header1' color={colors.white} >Join #VCCK</Typography>
                        <Typography variant='text2' color={colors.white}>
                            Vulnerable Children Concern Kenya (VCCK) is a non-governmental organization registered in Kenya and
                            is working in five counties namely: Tharakaa Nithi, Meru, Machakos, Nairobi and Kisumu.
                            <br />
                            <br />
                            Join #VCCK to help us reach out to a bigger audience.
                        </Typography>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                            <Button size='large' variant='contained' fullWidth={false} color='secondary' >Learn More</Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className='page3' >
                <Grid container className='page3__programs'>
                    <Grid item sm={6}>
                        <Typography variant='h3'> VCCK Programs</Typography>
                        <br />
                        <Typography variant='text1'>
                            On average we hold monthly fundraiser activities where we visit
                            children in various counties to support them.
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='text1'>
                            Each year donors and well-wishers travel with VCCKE to provide food, clothes and support
                            to the vulnerable children accross Kenya
                        </Typography>
                    </Grid>
                    <Grid item sm={6} className='page3__programs--buttons' >
                        <Button variant='contained' size='large'>BUTTON</Button>
                        <Button variant='contained' size='large'>BUTTON</Button>
                        <Button variant='contained' size='large'>BUTTON</Button>
                        <Button variant='contained' size='large'>BUTTON</Button>
                    </Grid>
                </Grid>

            </div>

        </div >
    )
}

export default Home
