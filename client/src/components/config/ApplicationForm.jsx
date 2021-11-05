import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Container, Grid, Typography, TextField, Button } from '@mui/material';

import { colors } from './colors';
import RadioButtonsGroup from "./RadioButtonGroup";

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
const ApplicationForm = ({ nameLabel, emailLabel, phoneLabel, messageLabel }) => {
    const classes = useStyles()
    const [status, setStatus] = useState("Submit");
    const [description, setDescription] = useState();
    const [info, setInfo] = useState();

    // pick values from radio button group
    const radioValues = async (data) => {
        setDescription(data);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, number, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            number: number.value,
            description: description,
            message: message.value,
        };
        let response = await fetch("http://vcck.org/api/application", {
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
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                helperText={`Enter ${nameLabel} here...`}
                                id={nameLabel} label={nameLabel} fullWidth variant="outlined" />
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                helperText={`Please enter your ${emailLabel}`}
                                fullWidth id={emailLabel} label={emailLabel} variant="outlined" />
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                helperText={`Please enter your phone ${phoneLabel}`}
                                fullWidth id={phoneLabel} label={phoneLabel} variant="outlined" />
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <RadioButtonsGroup radioValues={radioValues} />
                        </Grid>
                        <Grid item sm={12} xs={12} className={classes.gridItem}>
                            <TextField
                                required={true}
                                color='primary'
                                fullWidth
                                id={messageLabel}
                                label={messageLabel}
                                multiline
                                rows={4}
                                defaultValue={`Enter request ${messageLabel} here...`}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item sm={12} xs={12} >
                            <Button variant='contained' size='large' color='primary' type="submit">{status}</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </Box>
    );
};

export default ApplicationForm;