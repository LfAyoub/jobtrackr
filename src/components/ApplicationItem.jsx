import { useState } from "react";
import PropTypes from "prop-types";
import { TableRow, TableCell, Modal, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./ApplicationItem.module.css";
import { useApplications } from "../context/ApplicationContext";

function ApplicationItem({ application }) {
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);
  const navigate = useNavigate();
  const { deleteApplication } = useApplications();

  function formatDate(date) {
    return new Date(date).toLocaleDateString("eu-FR");
  }

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleDelete(id) {
    deleteApplication(id);
    console.log("Deleting application with id", id);
    handleClose();
  }

  return (
    <TableRow
      key={application.id}
      onMouseEnter={() => setHoveredId(application.id)}
      onMouseLeave={() => setHoveredId(null)}
    >
      <TableCell>{application.company}</TableCell>
      <TableCell>{application.position}</TableCell>
      <TableCell className={styles.statusCell}>
        <p className={`${styles[application.status]}`}>{application.status}</p>
      </TableCell>
      <TableCell>{formatDate(application.date)}</TableCell>
      <TableCell className={styles.actionCell}>
        {hoveredId === application.id && (
          <>
            <button className={styles.button} onClick={handleOpen}>
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios-glyphs/30/filled-trash.png"
                alt="filled-trash"
              />
            </button>
            <button
              className={styles.button}
              onClick={() => navigate(`/edit-application/${application.id}`)}
            >
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/ios/50/edit.png"
                alt="edit"
              />
            </button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className={styles.modalBox}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Delete this application ?
                </Typography>
                <button
                  className={styles.yesButton}
                  onClick={() => handleDelete(application.id)}
                >
                  Yes
                </button>
                <button className={styles.noButton} onClick={handleClose}>
                  No
                </button>
              </Box>
            </Modal>
          </>
        )}
      </TableCell>
    </TableRow>
  );
}

ApplicationItem.propTypes = {
  application: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ApplicationItem;
