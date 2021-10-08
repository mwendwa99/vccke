import { Container, Fade, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import React from 'react';

import { colors } from './config/colors';
import { TitlebarImageList } from './config/QuiltedImageList';

const useStyles = makeStyles((theme) => ({
    missionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    gridContainer: {
        boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.6)',
        backgroundColor: colors.green,
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
}));
const About = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1500}>
            <Box>
                <div maxWidth='xl' className='box background-tint'>
                    <div style={{ height: '30vh' }}>
                        <div className='page1' >
                            <Typography variant='header1' sx={{ color: '#fff' }}>About VCCK</Typography>
                        </div>
                    </div>
                </div>
                <Container>
                    <Typography variant="header1" color='primary' >Why VCCKE?</Typography>
                    <br />
                    <Typography variant="h5" align='justify' >
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
                        <Typography variant='h3' align='center'>
                            <strong>The VCCK Mission</strong>
                        </Typography>
                        <br />
                        <br />
                        <Typography variant='h4' align='center'>
                            The <strong>core mission</strong> of VCCK is to work with our communities to achieve sustainable solutions to
                            ending children poverty.
                        </Typography>
                    </Grid>
                    <Grid container className={classes.gridContainer} >
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h4'>
                                <strong>Quality Service</strong>
                            </Typography>
                            <Typography align='center' variant='h5'>
                                We shall do everything we can to address the needs of each other, our donors, our partners,
                                and the sick and dying all over the world.
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h4'>
                                <strong>Accountability</strong>
                            </Typography>
                            <Typography align='center' variant='h5'>
                                We will tell it as it is. We will not make promises we can not keep, and we will stick
                                to the ones we have already made.
                            </Typography>
                        </Grid>
                        <Grid item sm={3} className={classes.gridItem}>
                            <Typography align='center' variant='h4'>
                                <strong>Competence</strong>
                            </Typography>
                            <Typography align='center' variant='h5'>
                                In our field of expertise, we shall become specialists by acquiring a growing amount of knowledge
                                and expertise in order to make our vision a reality.
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Container className={classes.locationContainer} maxWidth='lg'>
                    <Typography variant='h4' color='primary' align='center'>
                        <strong>Administration and Operation centers</strong>
                    </Typography>
                    <Typography variant='h5' align='center' style={{ margin: '1rem' }}>
                        VCCK has its headquarters situated at Zimmerman Nairobi as well as five other locations across the
                        country which include distribution centers where we accept donations of supplies, clothes and food.
                        Currently, we are in the process of setting up offices in each of these locations, however, we have set
                        up adminitstative, development and operation staff in Nairobi and Tharaka Nithi County.
                    </Typography>
                    <div style={{ margin: '1rem' }}>
                        <TitlebarImageList />
                    </div>
                </Container>
            </Box>
        </Fade>
    )
}

export default About
