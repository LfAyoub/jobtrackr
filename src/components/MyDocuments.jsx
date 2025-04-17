import { Typography, Box } from "@mui/material";
import styles from "./MyDocuments.module.css";

function MyDocuments() {
  return (
    <div className="homeContainer">
      <Typography variant="h4" component="h3" sx={{ mb: 3 }} gutterBottom>
        My documents
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          my: "2rem",
        }}
      >
        <a
          href="/CV-Lafdail.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.documentLink}
        >
          <div className={styles.document}>
            <h4>Resume</h4>
            <img src="resume.png" alt="resume icon" />
          </div>
        </a>
        <a
          href="coverletter.pdf"
          target="_blank"
          rel="noreferrer"
          className={styles.documentLink}
        >
          <div className={styles.document}>
            <h4>Cover letter</h4>
            <img src="document.png" alt="resume icon" />
          </div>
        </a>
      </Box>
    </div>
  );
}

export default MyDocuments;
