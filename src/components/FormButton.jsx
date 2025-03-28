import { Button } from "@mui/material";
import styles from "./FormButton.module.css";

function FormButton({ onClick, children, color }) {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      variant="contained"
      color={color}
    >
      {children}
    </Button>
  );
}

export default FormButton;
