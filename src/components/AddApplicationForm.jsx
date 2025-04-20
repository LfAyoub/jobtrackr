import { useState } from "react";
import {
  Container,
  Box,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";
import FormButton from "./FormButton";
import styles from "./AddApplicationForm.module.css";

function AddApplicationForm() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  const { addApplication } = useApplications();
  const navigate = useNavigate();

  function handleChange(event) {
    event.preventDefault();
    setStatus(event.target.value);
  }

  function isValid(inputValue) {
    return inputValue.trim().length > 0;
  }

  async function handleSubmit() {
    const formData = { company, position, date, status };
    if (!isValid(company) || !isValid(position) || !isValid(date)) {
      alert("Please fill in all fields");
      return;
    }
    addApplication(formData);
    navigate("/applications");
  }

  return (
    <Box sx={{ mx: 1 }}>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#fff",
        }}
        maxWidth="sm"
      >
        <div className={styles.formRow}>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel htmlFor="application-name">Company</InputLabel>
            <Input
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>
        </div>
        <div className={styles.formRow}>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel htmlFor="position">Position</InputLabel>
            <Input
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </FormControl>
        </div>
        <div className={styles.formRow}>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="status-select-label"
              id="status-select"
              value={status}
              label="Status"
              onChange={handleChange}
            >
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Rejected">Rejected</MenuItem>
              <MenuItem value="Interview">Interview</MenuItem>
              <MenuItem value="Offer">Offer</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1 }} fullWidth>
            <InputLabel shrink htmlFor="date">
              Date
            </InputLabel>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>
        </div>
        <FormButton onClick={handleSubmit}>Add application</FormButton>
      </Container>
    </Box>
  );
}

export default AddApplicationForm;
