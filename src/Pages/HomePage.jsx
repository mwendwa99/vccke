import { Box, Typography, Grid, Container } from "@mui/material";

import Button from "@Button";
import Background from "Images/world.svg";
import vcck1 from "Images/vcck1.png";
import vcck2 from "Images/vcck2.png";
import vcck3 from "Images/vcck3.png";
import vcck4 from "Images/vcck4.png";

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    minHeight: "100vh", // Make sure it covers the entire viewport height
  };
  return (
    <Box sx={backgroundStyle}>
      <Container maxWidth="md">
        <Grid container spacing={3} sx={{ p: 2 }}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ my: 2, py: 2 }}>
              <Typography variant="h1" gutterBottom>
                Help us build a better Kenya
              </Typography>
              <Typography variant="body1">
                Our mission is to help promote and protect the vulnerable in
                Kenya
              </Typography>
            </Box>
            <Button
              sx={{ width: "100%", my: 10 }}
              variant="contained"
              text="Donate"
            />
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={1} style={{ height: "100%" }}>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={vcck1}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={vcck2}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={vcck3}
                />
              </Grid>
              <Grid item xs={6}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                  src={vcck4}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
