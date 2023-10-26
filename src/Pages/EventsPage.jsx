import {
  Container,
  Typography,
  Grid,
  Paper,
  //   Card,
  //   CardContent,
  //   CardMedia,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";

import Card from "@Card";
import dataIcon from "Icons/data.svg";
import arrowRight from "Icons/arrow-circle-right.svg";

const eventsData = [
  {
    title: "Event 1",
    date: "October 25, 2023",
    description: "Description for Event 1.",
    image:
      "https://images.pexels.com/photos/4545202/pexels-photo-4545202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path
  },
  {
    title: "Event 2",
    date: "November 5, 2023",
    description: "Description for Event 2.",
    image:
      "https://images.pexels.com/photos/3114072/pexels-photo-3114072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path
  },
  {
    title: "Event 2",
    date: "November 5, 2023",
    description: "Description for Event 2.",
    image:
      "https://images.pexels.com/photos/6995201/pexels-photo-6995201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Replace with your image path
  },
  // Add more events...
];

const newsData = [
  {
    title: "News 1",
    date: "October 10, 2023",
    description: "Description for News 1.",
    icon: dataIcon,
    iconButton: arrowRight,
  },
  {
    title: "News 2",
    date: "October 15, 2023",
    description: "Description for News 2.",
    icon: dataIcon,
    iconButton: arrowRight,
  },
  {
    title: "News 2",
    date: "October 15, 2023",
    description: "Description for News 2.",
    icon: dataIcon,
    iconButton: arrowRight,
  },
  {
    title: "News 2",
    date: "October 15, 2023",
    description: "Description for News 2.",
    icon: dataIcon,
    iconButton: arrowRight,
  },
  // Add more news...
];

const EventsPage = () => {
  return (
    <Container sx={{ paddingTop: 4 }}>
      <Typography variant="h3" gutterBottom align="center">
        Events and News
      </Typography>
      <Carousel
        autoPlay={true}
        navButtonsAlwaysVisible={true}
        indicators={false}
        animation="slide"
        height={500}
      >
        {eventsData.map((event, index) => (
          <Paper key={index} sx={{ padding: 2, height: "100%" }}>
            <img
              src={event.image}
              alt={event.title}
              style={{ height: 300, objectFit: "cover", marginBottom: 2 }}
            />
            <Typography variant="h6">{event.title}</Typography>
            <Typography color="textSecondary">{event.date}</Typography>
            <Typography>{event.description}</Typography>
          </Paper>
        ))}
      </Carousel>
      <Typography variant="h3" gutterBottom sx={{ mt: 3 }}>
        News
      </Typography>
      <Grid container spacing={0} sx={{ mb: 3 }}>
        {newsData.map((news, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card
              type="basic"
              title={news.title}
              date={news.date}
              description={news.description}
              icon={news.icon}
              iconButton={news.iconButton}
            />
            {/* <Card
            //   sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                height="150"
                image={news.image}
                alt={news.title}
              />
              <CardContent>
                <Typography variant="h6">{news.title}</Typography>
                <Typography color="textSecondary">{news.date}</Typography>
                <Typography>{news.description}</Typography>
              </CardContent>
            </Card> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default EventsPage;
