import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'

import { assets } from '../assets';
import { Fab, IconButton, ListItemIcon, Menu, MenuItem, Slide, Tooltip, useMediaQuery, useScrollTrigger } from '@mui/material';
import { Home, MenuRounded, FavoriteRounded, ChildCareRounded, ContactsRounded } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    linksSection: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
    }
}));

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction={"down"} in={!trigger}>
            {children}
        </Slide>
    );
}

export default function ButtonAppBar(props) {
    const classes = useStyles();
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"))
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    // const theme = useTheme();
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    const handleClose = () => {
        setAnchor(null);
    };
    return (
        <Box style={{ flex: 1 }}>
            <HideOnScroll {...props}>
                <AppBar position="static">
                    <Toolbar className={classes.root} >
                        <Fab
                            size="large"
                            disableFocusRipple
                            edge="start"
                            aria-label="menu"
                            sx={{ mr: 2, boxShadow: 'none' }}
                            component={Link}
                            to='/'
                        >
                            <Tooltip title='HOME'>
                                <img src={assets.logo} height='100%' width='100%' alt="logo" />
                            </Tooltip>
                        </Fab>
                        {isMobile ? (
                            <>
                                <IconButton
                                    id="basic-button"
                                    aria-controls="basic-menu"
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleMenu}
                                    color="primary"
                                >
                                    <MenuRounded />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchor}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem
                                        onClick={handleClose}
                                        component={Link}
                                        to="/"
                                    >
                                        <ListItemIcon>
                                            <Home color='primary' />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Home</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={handleClose}
                                        component={Link}
                                        to="/our-work"
                                    >
                                        <ListItemIcon>
                                            <FavoriteRounded color='secondary' />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Our Work </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={handleClose}
                                        component={Link}
                                        to="/about"
                                    >
                                        <ListItemIcon>
                                            <ChildCareRounded color='orange' />
                                        </ListItemIcon>
                                        <Typography variant="h6"> About</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/contact"
                                    >
                                        <ListItemIcon>
                                            <ContactsRounded color='yellow' />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Contact </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (<div className={classes.linksSection}>
                            <Link to='/our-work' style={{ textDecoration: 'none' }}>
                                <Typography color="primary" variant="h6" >Our Work</Typography>
                            </Link>
                            <Link to='/about' style={{ textDecoration: 'none' }}>
                                <Typography color="primary" variant="h6" >About Us</Typography>
                            </Link>
                            <Link to='/contact' style={{ textDecoration: 'none' }}>
                                <Typography color="primary" variant="h6" >Contact</Typography>
                            </Link>
                            <Tooltip title="coming soon!" placement='bottom'>
                                <Link to='/donate' style={{ textDecoration: 'none' }}>
                                    <Button variant='contained' disableElevation size='medium' color="primary">
                                        DONATE
                                    </Button>
                                </Link>
                            </Tooltip>
                        </div>)}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </Box>
    );
}
