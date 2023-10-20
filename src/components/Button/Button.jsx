import { Button } from "@mui/material";
import PropTypes from "prop-types";

export default function CustomButton(props) {
  return (
    <Button variant={props.variant} sx={props.sx}>
      {props.text}
    </Button>
  );
}

CustomButton.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  styles: PropTypes.object,
};
