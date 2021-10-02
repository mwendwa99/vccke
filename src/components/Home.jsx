import React from 'react';
import { Parallax } from 'react-parallax';
import { Typography, Button, Paper, Container, Grid } from '@mui/material'

import { assets } from '../assets';
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
        <div className='' >
            <Parallax
                bgImage={assets.home}
                strength={500}
                bgImageStyle={{ opacity: '0.9' }}
                blur={{ min: 0, max: 0.5 }}
            >
                <div style={{ height: '90vh' }}>
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
                            Children comprise more than half of the monetarily poor population (55%) and nearly half (48%) of the multi-dimensionally poor population. (Kenya National Bureau of Statistics, 2020)
                        </Typography>
                    </Paper>
                </Grid>
            </Container>
            <Container maxWidth='xl'  >
                <Grid container className='page2__container'  >
                    <Grid className='page2__card' item sm={12}>
                        {
                            values.map((item, id) =>
                                <Card key={id} pos={id} item={item} />
                            )
                        }
                    </Grid>
                </Grid>
            </Container>

        </div >
    )
}

export default Home
