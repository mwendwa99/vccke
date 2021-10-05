import { AppBar, Container, Toolbar, Typography } from "@mui/material";

export default function Footer() {
    return (
        <AppBar style={{ height: '7rem' }} position="static" color='orange'>
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography variant="body1" align='left' color="inherit">
                        © 2021 vcck
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}