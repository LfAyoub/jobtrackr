import { Typography, Box } from "@mui/material";
import styles from "./MyProfile.module.css";

function MyProfile() {
  return (
    <div className="homeContainer">
      <Typography variant="h4" component="h3" sx={{ mb: 3 }} gutterBottom>
        My profile
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <img
            src="profile.jpg"
            alt="profile"
            className={styles.profileImage}
          />
          <div>
            <h2>Ayoub Lafdail</h2>
            <p>Web developer</p>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className={styles.profilePosition}>
          <h4>Position sought</h4>
          <ul>
            <li>Front-end developer</li>
            <li>Back-end developer</li>
            <li>Full-stack developer</li>
          </ul>
        </div>
        <div className={styles.profileSkills}>
          <h4>Skills</h4>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
      </Box>
    </div>
  );
}

export default MyProfile;
