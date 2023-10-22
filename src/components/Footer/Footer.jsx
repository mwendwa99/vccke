import { Box, Typography, Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import logo from "Images/logo-lg.svg";
import Button from "@Button";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#31B049", color: "white" }} p={3}>
      <Grid
        container
        spacing={3}
        sx={{ flexDirection: "column", alignItems: "center" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ flexDirection: "column", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Company Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
          <Typography variant="body2" align="center" gutterBottom>
            Children Derserve the best
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ flexDirection: "column", alignItems: "center" }}
        >
          <Button type="text" text="Donate" variant="contained" />
        </Grid>
        <Grid item xs={12}>
          <Link href="/">Home | </Link>
          <Link href="/about">About Us | </Link>
          <Link href="/services">Events | </Link>
          <Link href="/contact">Get Involved</Link>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Link href="https://facebook.com" target="_blank">
            <FacebookIcon />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <TwitterIcon />
          </Link>
          <Link href="https://instagram.com" target="_blank">
            <InstagramIcon />
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
