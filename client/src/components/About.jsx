import { Container, Fade, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import React from 'react';
import { assets } from '../assets';

import { colors } from './config/colors';
import { TitlebarImageList } from './config/QuiltedImageList';

const useStyles = makeStyles((theme) => ({
    missionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        boxShadow: '0px 6px 6px rgba(0, 0, 0, 0.25)',
        backgroundColor: colors.primary,
    },
    gridContainer: {
        padding: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        color: 'white'
    },
    gridItem: {
        padding: theme.spacing(3),
        color: 'white'
    },
    locationContainer: {
        padding: theme.spacing(3)
    },
    teamContainer: {
        backgroundColor: colors.grey
    },
    teamGridContainer: {
        padding: theme.spacing(3)
    },
    teamGridItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            '& img': {
                height: '100%',
                width: '100%'
            }

        }
    },
    titleBar: {
        height: '30vh',
        [theme.breakpoints.down('sm')]: {
            height: '15vh'
        }
    }
}));
const About = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box>
                <Grid className='box background-tint'>
                    <Grid className={classes.titleBar}>
                        <Grid className='page1' >
                            <Typography variant='h1' align='justify' sx={{ color: '#fff' }}>About VCCK</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Container>
                    <Typography variant="h1" color='primary' >Why VCCKE?</Typography>
                    <br />
                    <Typography variant="body1" align='justify' >
                        Vulnerable Children Concern Kenya (VCCK) is a national non-governmental Organization registered
                        in Kenya and is working five counties: Tharaka Nithi, Meru, Machakos, Nairobi and Kisumu.
                        The organization started its first activities early in 2018 and got registered as an NGO in 2020.
                        <br />
                        <br />
                        Our core purpose is to provide help to children suffering from effects of extreme poverty in Kenya's
                        poorest community regardless of gender, religious affiliations or race.
                        We achieve this by working with communities to provide sustainable solutions that improve the well
                        -being of vulnerable Children.
                        <br />
                        <br />
                        A focus on children is important as one scholar points out, that it is not an exaggeration to say that how
                        effectively children navigate their childhood, will be a crucial element on how we all humanity weathers
                        the coming challenges of the next century.
                        <br />
                        <br />
                        Our programs are funded  by the generous support of philanthropic foundations, corporate partners as
                        well as individual donors from all walks of life. People like you, who are willing to get involved, are at
                        the heart of VCCK. We can make a difference in the world if we work together!
                        <br />
                        <br />
                    </Typography>
                </Container>
                <Container className={classes.missionContainer} maxWidth='xl'>
                    <Grid className={classes.gridContainer} container>
                        <Typography variant='h1' align='center'>
                            <strong>The VCCK Mission</strong>
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='h2' align='center'>
                            The <strong>core mission</strong> of VCCK is to work with our communities to achieve sustainable solutions to
                            ending children poverty.
                        </Typography>
                    </Grid>
                    <Grid container className={classes.gridContainer} >
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h2'>
                                <strong>Quality Service</strong>
                            </Typography>
                            <Typography align='center' variant='body1'>
                                We shall do everything we can to address the needs of each other, our donors, our partners,
                                and the sick and dying all over the world.
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h2'>
                                <strong>Accountability</strong>
                            </Typography>
                            <Typography align='center' variant='body1'>
                                We will tell it as it is. We will not make promises we can not keep, and we will stick
                                to the ones we have already made.
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h2'>
                                <strong>Competence</strong>
                            </Typography>
                            <Typography align='center' variant='body1'>
                                In our field of expertise, we shall become specialists by acquiring a growing amount of knowledge
                                and expertise in order to make our vision a reality.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.locationContainer} maxWidth='lg'>
                    <Typography variant='h2' color='primary' align='center'>
                        <strong>Administration and Operation centers</strong>
                    </Typography>
                    <Typography variant='body1' align='center' style={{ margin: '1rem' }}>
                        VCCK has its headquarters situated at Zimmerman Nairobi as well as five other locations across the
                        country which include distribution centers where we accept donations of supplies, clothes and food.
                        Currently, we are in the process of setting up offices in each of these locations, however, we have set
                        up adminitstative, development and operation staff in Nairobi and Tharaka Nithi County.
                    </Typography>
                    <div style={{ margin: '1rem' }}>
                        <TitlebarImageList />
                    </div>
                </Container>
                <Container maxWidth='xxl' className={classes.teamContainer}>
                    <Typography variant='h1' color='primary' align='center'>
                        The VCCK Team
                    </Typography>
                    <Grid container className={classes.teamGridContainer}>
                        <Grid item sm={12} className={classes.teamGridItem}>
                            <Typography variant='body1' align='center'>
                                <img src={assets.team} height='100%' width='100%' alt="our team" />
                                From left: Ms. Rosalia Makau, Ms. Nancy Wanja, Ms. Winnie Munene, Dr. Rittah Njeru, Dr. Fredrcik Kamunde.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default About
