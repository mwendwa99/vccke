import { Box, Typography, Grid, Container } from "@mui/material";

import Button from "@Button";
import Card from "@Card";
import ImageList from "@ImageList";
import Background from "Images/world.svg";
import vcck1 from "Images/vcck1.png";
import vcck2 from "Images/vcck2.png";
import vcck3 from "Images/vcck3.png";
import vcck4 from "Images/vcck4.png";
import vcck5 from "Images/vcck5.png";

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
      <Container maxWidth="lg">
        <Grid container spacing={3} sx={{ py: 3 }}>
          <Grid
            item
            sm={6}
            md={6}
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
              type="text"
              sx={{ width: "100%", my: 10 }}
              variant="contained"
              text="Donate"
            />
          </Grid>
          <Grid item sm={6} md={6}>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={6} md={8}>
                <img src={vcck1} alt="Image 1" />
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <img src={vcck2} alt="Image 2" />
              </Grid>
              <Grid item xs={6} sm={6} md={4}>
                <img src={vcck4} alt="Image 3" />
              </Grid>
              <Grid item xs={6} sm={6} md={8}>
                <img src={vcck3} alt="Image 4" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* who we are */}
        <Grid container spacing={3} sx={{ py: 3 }}>
          <Grid
            item
            sm={6}
            md={6}
            sx={{
              display: { xs: "none", sm: "flex" },
              p: 0,
              m: 0,
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={vcck5}
              alt="children"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              textAlign: { xs: "center", sm: "left" },
              flexDirection: "column",
            }}
          >
            <Box>
              <Typography gutterBottom variant="h2">
                Who We Are?
              </Typography>
              <Typography gutterBottom variant="body1">
                We are VULNERABLE CHILDREN CONCERN KE, based in the heart of
                Nairobi. As a charitable foundation, we are dedicated to helping
                those in need.
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h2">
                What We Do?
              </Typography>
              <Typography gutterBottom variant="body1">
                Through the tireless efforts of our dedicated volunteers,
                committed staff members, and supportive partners, we work
                diligently to improve the lives of those in our community who
                require assistance.
              </Typography>
            </Box>
            <Box>
              <Typography gutterBottom variant="h2">
                Why We Do It?
              </Typography>
              <Typography gutterBottom variant="body1">
                Our motivation stems from an unwavering passion for creating a
                positive impact. We believe that a helping hand can transform
                lives and entire communities. By reaching out to us, you too can
                be a part of this mission to bring about positive change.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* Goals */}
        <Grid container spacing={3} sx={{ py: 3 }}>
          <Grid item xs={12} sx={{ flexDirection: "column" }}>
            <Typography align="center" gutterBottom variant="h2">
              Our Goals
            </Typography>
            <Typography align="center" variant="body1">
              At Vulnerable Children Concerns Kenya, we are driven by a
              commitment to make the country a better place. Our goals reflect
              the core values we hold dear, and they are central to our mission:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Card />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Activity */}
        <Grid container spacing={3} sx={{ py: 3 }}>
          <Grid item xs={12}>
            <Typography align="center" gutterBottom variant="h2">
              Gallery
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ImageList />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
