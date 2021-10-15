import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

import { colors } from './colors';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: colors.white,
        boxShadow: ' 0px 3.41111px 3.41111px rgba(0, 0, 0, 0.25)',
    },
    gridContainer: {
        padding: theme.spacing(2),
    },
    gridItem: {
        padding: theme.spacing(2),
    }
}))
const ContactForm = () => {
    const classes = useStyles()
    const [status, setStatus] = useState("Submit");
    const [info, setInfo] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        setInfo(result.status)
    };
    return (
        <Box>
            <Container maxWidth='md'>
                <form className={classes.root} onSubmit={handleSubmit}>
                    <Typography variant='h5' color='secondary'> {info} </Typography>
                    <Grid container className={classes.gridContainer}>
                        <Grid item sm={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                helperText="Please enter your name"
                                id="name" label="name" fullWidth variant="outlined" />
                        </Grid>
                        <Grid item sm={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                helperText="Please enter your email"
                                fullWidth id="email" label="email" variant="outlined" />
                        </Grid>
                        <Grid item sm={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                fullWidth
                                id="message"
                                label="Message"
                                multiline
                                rows={4}
                                defaultValue="Enter message here..."
                                variant="filled"
                            />
                        </Grid>
                        <Grid item sm={12}>
                            <Button variant='contained' size='large' color='primary' type="submit">{status}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default ContactForm;