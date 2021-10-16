import { Container, Fade, Grid, Typography, Divider, Button } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles';
import React from 'react';

import { colors } from './config/colors';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.white,
    },
    gridContainer: {
        padding: theme.spacing(2),
    },
    gridItem: {
        padding: theme.spacing(2),
    },
    gridContainer__bottom: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    gridItem__bottom: {
        backgroundColor: colors.grey,
        padding: theme.spacing(1),
    },
    links: {
        textDecoration: 'none',
    }
}))

const Volunteer = () => {
    const classes = useStyles();

    return (
        <Fade in timeout={1000}>
            <Box className='box background-tint'>
                <Grid container style={{ height: '30vh' }}>
                    <Grid item className='page1' >
                        <Typography variant='header1' sx={{ color: colors.white }}>Volunteer</Typography>
                    </Grid>
                </Grid>
                <Container maxWidth='xxl' className={classes.root}>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={6} className={classes.gridItem}>
                            <img width="100%" height="100%" src="https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg" alt="volunteer" />
                        </Grid>
                        <Grid item sm={6} className={classes.gridItem}>
                            <Typography variant='header1' color='primary'>
                                Volunteer in the community <br /> & across the country
                            </Typography>
                            <br />
                            <Typography variant='text2' align='justify'>
                                Our volunteers, on whom our organization relies, are at the core of VCCK.
                                Our volunteers come from a variety of backgrounds to help VCCK with
                                anything from sorting the supply contributions and distributing equipment to
                                administrative chores and offering professional knowledge to our many divisions.
                                <br />
                                <br />
                                Our volunteers are used in accordance with their abilities and interests, and they assist
                                us in acheving our goals. Learn more about volunteering opportunities below, or
                                contact us to get started!
                                <br />
                                <br />
                                Locate Volunteer Opportunities
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container gap={1.8} className={classes.gridContainer__bottom}>
                        <Grid item sm={12} className={classes.gridItem}>
                            <Typography align='center' variant='header1' color='primary'>
                                Volunteer Opportunities
                            </Typography>
                            <br />
                            <Typography align='center' variant='text2'>
                                Find below volunteer opportunities that you could take part in
                            </Typography>
                        </Grid>
                        <Grid
                            item sm={3.9}
                            className={classes.gridItem__bottom}
                        >
                            <Typography variant='header2'>Office Volunteers</Typography>
                            <br />
                            <br />
                            <Typography variant='text3' align='left'>
                                Office volunteers assist us in managing our front desk by welcoming customers, answering phones,
                                and assisting with administrative tasks. Monday through Friday, 9 a.m. to 5 p.m., and we ask
                                that our office volunteers commit to at least 2 hours every week.
                            </Typography>
                        </Grid>
                        <Grid
                            item sm={3.9}
                            className={classes.gridItem__bottom}
                        >
                            <Typography variant='header2'>Packaging Volunteers</Typography>
                            <br />
                            <br />
                            <Typography variant='text3' align='left'>
                                We need packing volunteers to assist with the packaging of sensitive equipment for shipment so that
                                none of our supplies are harmed in transit. Monday through Friday, 9 a.m. to 5 p.m., and we encourage
                                our packing volunteers to commit to at least 3 hours each month.
                            </Typography>
                        </Grid>
                        <Grid
                            item sm={3.9}
                            className={classes.gridItem__bottom}
                        >
                            <Typography variant='header2'>Warehouse Volunteers</Typography>
                            <br />
                            <br />
                            <Typography variant='text3' align='left' gutterBottom={true}>
                                Warehouse volunteers are needed to assist manage our warehouses, run forklifts, prepare for shipments,
                                unload contributions, and load containers for transport. It may need some physical work. Monday through
                                Friday, 9 a.m. to 5 p.m., and we ask that warehouse volunteers commit to serve at least 3 hours every month.
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Link to='/contact' className={classes.links}>
                                <Button size='large' variant='contained' color='primary' >
                                    Contact Us
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Fade>
    )
}

export default Volunteer
