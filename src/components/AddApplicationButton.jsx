import { Button } from "@mui/material";
import styles from "./AddApplicationButton.module.css";
import PropTypes from "prop-types";

function AddApplicationButton({ onClick }) {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      variant="contained"
      color="primary"
    >
      Add application
    </Button>
  );
}
AddApplicationButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddApplicationButton;
