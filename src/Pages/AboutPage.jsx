import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import PropTypes from "prop-types";

// Define information about the Board of Directors
const teamMembers = [
  {
    name: "Dr. Fredrcik Kamunde",
    role: "Chairman",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378", // Replace with actual image paths
  },
  {
    name: "Ms. Rosalia Makau",
    role: "Vice Chairperson",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  {
    name: "Dr. Rittah Njeru",
    role: "Treasurer",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  {
    name: "Ms. Nancy Wanja",
    role: "Secretary",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  {
    name: "Mr. Peter Njeru",
    role: "Member",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  {
    name: "Mr. Shadrack Munyao",
    role: "Member",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  {
    name: "Ms. Winnie Munene",
    role: "Member",
    image:
      "https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1698742061~exp=1698742661~hmac=f53015af898804ef97a097e88a2dc22d29e8002c001ad2b5e05dba4dff831378",
  },
  // Add more board members here
];

const Team = ({ name, role, image }) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Box sx={{ textAlign: "center" }}>
      <img src={image} alt={name} style={{ maxWidth: "100%" }} />
      <Typography variant="h6" sx={{ mt: 1 }}>
        {name}
      </Typography>
      <Typography variant="subtitle1">{role}</Typography>
    </Box>
  </Grid>
);

const AboutPage = () => {
  return (
    <Container sx={{ my: 4 }}>
      <Typography variant="h5" sx={{ textAlign: "center", mb: 4 }}>
        About Vulnerable Children Concern Kenya (VCCK)
      </Typography>
      <Typography paragraph align="justify">
        Vulnerable Children Concern Kenya (VCCK) is a national Non-Governmental
        Organization registered in Kenya and is working in five counties,
        namely: Tharaka Nithi, Meru, Machakos, Nairobi, and Kisumu. The
        organization started its first activities early in 2018 but was
        registered as an NGO in 2020.
      </Typography>
      <Typography paragraph align="justify">
        Our core purpose is to provide help to children suffering from the
        effects of extreme poverty in Kenya&apos;s poorest communities,
        regardless of gender, religious affiliations, or race. We do so by
        working with communities to provide sustainable solutions that improve
        the well-being of vulnerable children. A focus on children is important
        as one scholar points out that how effectively children navigate their
        childhood will be a crucial element in how well all humanity weathers
        the coming challenges of the next century.
      </Typography>
      <Typography variant="h4" sx={{ mb: 2 }}>
        Our Mission
      </Typography>
      <Grid container spacing={2} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ padding: 2, height: "100%" }}>
            <Typography paragraph align="justify">
              - Undertaking research to develop sustainable solutions to
              eradicating poverty
            </Typography>
            <Typography paragraph align="justify">
              - Access to basic, quality education and early childhood
              development
            </Typography>
            <Typography paragraph align="justify">
              {" "}
              - Improving mental health and physical health
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={0} sx={{ padding: 2, height: "100%" }}>
            <Typography paragraph align="justify">
              - Access to food and nutrition
            </Typography>
            <Typography paragraph align="justify">
              - Advocating against child abuse, including Female genital
              mutilation
            </Typography>
            <Typography paragraph align="justify">
              - Supporting entrepreneurship and innovation
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Typography align="center" gutterBottom variant="h5">
        Meet the Team
      </Typography>
      <Grid container spacing={2}>
        {teamMembers.map((member, index) => (
          <Team key={index} {...member} />
        ))}
      </Grid>
    </Container>
  );
};

export default AboutPage;

Team.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.string,
};
