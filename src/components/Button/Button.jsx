import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PropTypes from "prop-types";

export default function CustomButton(props) {
  switch (props.type) {
    case "text":
      return (
        <Button variant={props.variant} sx={props.sx}>
          {props.text}
        </Button>
      );
    case "icon":
      return (
        <IconButton aria-label={props.label} sx={props.sx}>
          <img style={{ padding: "10px" }} src={props.icon} alt={props.label} />
        </IconButton>
      );
    default:
      return null;
  }
}

CustomButton.propTypes = {
  variant: PropTypes.string,
  text: PropTypes.string,
  styles: PropTypes.object,
  sx: PropTypes.object,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  icon: PropTypes.string,
};
