import { Box, Typography, Button } from "@mui/material";

const NotFoundPage = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="50vh"
      color="white"
      p={2}
    >
      <iframe
        style={{ border: "none" }}
        src="https://lottie.host/?file=fbc4bb8c-2b6e-423e-9de5-d29e65c7ec36/4GSDwHZnjV.json"
      ></iframe>
      <Typography variant="h2" gutterBottom>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sorry! the page you are looking for is under maintenance.
      </Typography>
      <Button variant="contained" color="secondary" href="/">
        Go to Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
