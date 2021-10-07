import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { AppBar, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { assets } from "../assets";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
    },
    links: {
        textDecoration: 'none',
        color: '#000',
        '&:hover': {
            textDecoration: 'underline',
            color: 'blue'
        }
    },
    gridContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    socials: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '50%',
        padding: '0.1rem'
    }
}))

export default function Footer() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.root} position="static" color='orange'>
                <Container maxWidth="xl">
                    <Toolbar >
                        <Grid container className={classes.gridContainer}>
                            <Grid item sm={4}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    component={Link}
                                    to='/'
                                >
                                    <img src={assets.logo} height={100} width={100} alt="logo" />
                                </IconButton>
                                <Typography variant="text2" color="inherit">
                                    © 2021 vcck
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography variant="text2">
                                    P.O.BOX 4534 - 00200
                                    <br />
                                    Zimmerman, Nairobi
                                    <br />
                                    <br />
                                    Tel: 0722894325
                                </Typography>
                            </Grid>
                            <Grid item sm={4}>
                                <Typography style={{ display: 'flex' }} variant="text2" color="inherit">
                                    Links:
                                    <ul style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                                        <Link className={classes.links} to='/'>Home</Link>
                                        <Link className={classes.links} to='/our-work'>Our Work</Link>
                                        {/* <Link className={classes.links} to='/impact'>Impact</Link> */}
                                        <Link className={classes.links} to='/about'>About Us</Link>
                                        <Link className={classes.links} to='/contact'>Contact</Link>
                                    </ul>
                                </Typography>
                            </Grid>
                            <Grid className={classes.socials} item sm={5}>
                                <Facebook fontSize='large' />
                                <Instagram fontSize='large' />
                                <Twitter fontSize='large' />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}