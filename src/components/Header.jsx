// IMPORTING APIS
import { useTheme } from "@emotion/react";
import { Bookmarks, Home, Menu, Person, School } from "@mui/icons-material";
import { AppBar, Button, IconButton, ListItemIcon, MenuItem, Slide, Toolbar, Typography, useMediaQuery, useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";

// LOCAL-STYLING
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
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

const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    return (
        <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography
                            variant="h5"
                            component="p"
                            color="textSecondary"
                            className={classes.title}
                        >
                            Murali
                        </Typography>
                        {isMobile ? (
                            <>
                                <IconButton
                                    color="textPrimary"
                                    className={classes.menuButton}
                                    edge="start"
                                    aria-label="menu"
                                    onClick={handleMenu}
                                >
                                    <Menu />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchor}
                                    anchorOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    KeepMounted
                                    transformOrigin={{
                                        vertical: "top",
                                        horizontal: "right"
                                    }}
                                    open={open}
                                >
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/"
                                    >
                                        <ListItemIcon>
                                            <Home />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Home</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/College"
                                    >
                                        <ListItemIcon>
                                            <School />
                                        </ListItemIcon>
                                        <Typography variant="h6"> College </Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/About"
                                    >
                                        <ListItemIcon>
                                            <Person />
                                        </ListItemIcon>
                                        <Typography variant="h6"> About</Typography>
                                    </MenuItem>
                                    <MenuItem
                                        onClick={() => setAnchor(null)}
                                        component={Link}
                                        to="/Personal"
                                    >
                                        <ListItemIcon>
                                            <Bookmarks />
                                        </ListItemIcon>
                                        <Typography variant="h6"> Personal </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <div style={{ marginRight: "2rem" }}>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/"
                                    color="default"
                                >
                                    <Home />
                                    Home
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/College"
                                    color="default"
                                >
                                    <School />
                                    College
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/About"
                                    color="default"
                                >
                                    <Person />
                                    About
                                </Button>
                                <Button
                                    variant="text"
                                    component={Link}
                                    to="/Personal"
                                    color="default"
                                >
                                    <Bookmarks />
                                    Personal
                                </Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
        </div>
    );
};

export default Header;
