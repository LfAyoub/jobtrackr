import { useState } from "react";
import {
  Container,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./LastApplications.module.css";

function LastApplications({ data }) {
  const [applications, setApplications] = useState(data);

  function formatDate(date) {
    return new Date(date).toLocaleDateString("eu-FR");
  }

  return (
    <Container className="homeContainer" sx={{ minHeight: "410px" }}>
      <Typography variant="h4" component="h3" sx={{ mb: 3 }} gutterBottom>
        Last applications
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Company</TableCell>
              <TableCell>Position</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {applications
              .slice()
              .sort((a, b) => new Date(b.date) - new Date(a.date))
              .slice(0, 3)
              .map((application) => (
                <TableRow key={application.id}>
                  <TableCell>{application.company}</TableCell>
                  <TableCell>{application.position}</TableCell>
                  <TableCell className={styles.statusCell}>
                    <p className={`${styles[application.status]}`}>
                      {application.status}
                    </p>
                  </TableCell>
                  <TableCell>{formatDate(application.date)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/applications">
        <Button variant="contained" color="primary" className={styles.button}>
          See more
        </Button>
      </Link>
    </Container>
  );
}

export default LastApplications;
