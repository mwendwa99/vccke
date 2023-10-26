import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Button from "@Button";

const BasicCard = (props) => {
  return (
    <Card sx={{ width: 275, m: 2 }} elevation={0}>
      <CardContent>
        <img
          style={{
            backgroundColor: "#0284C7",
            padding: "5px",
            borderRadius: "10px",
            display: "block",
            float: "left",
          }}
          src={props.icon}
          height="35px"
          width="35px"
          alt="data-icon"
        />
        <CardHeader title={props.title} />
        <Typography color="textSecondary">{props.date}</Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions
        onClick={() => props.navigate("/ss")}
        style={{ justifyContent: "flex-end" }}
      >
        <Button
          variant="button"
          type="icon"
          icon={props.iconButton}
          label="arrow-circle-right"
        />
      </CardActions>
    </Card>
  );
};

const MediaCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default function CardComponent(props) {
  const navigate = useNavigate();

  switch (props.type) {
    case "basic":
      return (
        <BasicCard
          navigate={navigate}
          title={props.title}
          date={props.date}
          description={props.description}
          icon={props.icon}
          iconButton={props.iconButton}
        />
      );
    case "media":
      return <MediaCard />;
    default:
      return (
        <BasicCard
          navigate={navigate}
          title={props.title}
          description={props.description}
          icon={props.icon}
          iconButton={props.iconButton}
        />
      );
  }
}

CardComponent.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  iconButton: PropTypes.string,
};

BasicCard.propTypes = {
  navigate: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  iconButton: PropTypes.string,
};

MediaCard.propTypes = {
  navigate: PropTypes.func,
};
