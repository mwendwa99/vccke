import { useNavigate } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Button from "@Button";
import dataIcon from "Icons/data.svg";
import arrowRight from "Icons/arrow-circle-right.svg";

export default function BasicCard() {
  const navigate = useNavigate();

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
          src={dataIcon}
          height="35px"
          width="35px"
          alt="data-icon"
        />
        <CardHeader title=" Fighting Poverty" />

        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Through providing essential aid to those in need, we aim to empower
          individuals and families, offering them a pathway to a brighter
          future.
        </Typography>
      </CardContent>
      <CardActions
        onClick={() => navigate("/ss")}
        style={{ justifyContent: "flex-end" }}
      >
        <Button
          variant="button"
          type="icon"
          icon={arrowRight}
          label="arrow-circle-right"
        />
      </CardActions>
    </Card>
  );
}
