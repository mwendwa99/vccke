import React from 'react';
import { makeStyles } from '@mui/styles';
import { Parallax } from 'react-parallax';
import { Typography, Button, Paper } from '@mui/material'

import assets from '../assets'

const useStyles = makeStyles((theme) => ({

}))

function Home() {
    return (
        <div className='' >
            <Parallax
                bgImage={assets.home}
                strength={500}
            >
                <div style={{ height: '90vh' }}>
                    <div className='header__home--component1' >
                        <Typography variant='header1' sx={{ color: '#fff' }}>Children Deserve the Best</Typography>
                        <br />
                        <br />
                        <Typography variant='body1' sx={{ color: '#fff' }}>
                            The core mission of Vulnerable Children Concern Kenya is to work with our communities to achieve sustainable solutions to ending children poverty.
                        </Typography>
                        <br />
                        <br />
                        <Button variant='contained' color='secondary' >Take Action</Button>
                        <Button variant='contained' color='neutral' >Contact Us</Button>
                    </div>
                </div>
            </Parallax>
            <div className='page2' >
                <Paper className='header__home--component2'>
                    <Typography variant='header1' color='primary'>Our Vision</Typography>
                    <Typography color="secondary" variant='header2'>
                        Improving Children Wellbeing and Reducing Poverty in Kenya
                    </Typography>
                    <br />
                    <Typography align='center'>
                        Children comprise more than half of the monetarily poor population (55%) and nearly half (48%) of the multi-dimensionally poor population. (Kenya National Bureau of Statistics, 2020)
                    </Typography>
                </Paper>
            </div>

        </div >
    )
}

export default Home
