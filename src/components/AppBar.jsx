import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'

import { assets } from '../assets';
import { Fab, Tooltip } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'white',
        justifyContent: 'space-around',
    },
    linksSection: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
    }
}))

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className={classes.root} >
                    <Fab
                        size="large"
                        edge="start"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        component={Link}
                        to='/'
                    >
                        <Tooltip title='HOME'>
                            <img src={assets.logo} height='100%' width='100%' alt="logo" />
                        </Tooltip>
                    </Fab>
                    <div className={classes.linksSection}>
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
                            <Button variant='contained' disableElevation size='medium' color="primary">
                                DONATE
                            </Button>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
