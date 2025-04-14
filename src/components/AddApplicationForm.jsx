import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import { useState } from "react";
import styles from "./AddApplicationForm.module.css";
import FormButton from "./FormButton";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

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
        <FormControl sx={{ m: 1, minWidth: 500 }}>
          <InputLabel htmlFor="application-name">Company</InputLabel>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.formRow}>
        <FormControl sx={{ m: 1, minWidth: 500 }}>
          <InputLabel htmlFor="position">Position</InputLabel>
          <Input
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.formRow}>
        <FormControl sx={{ m: 1, minWidth: 250 }}>
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
        <FormControl sx={{ m: 1, minWidth: 250 }}>
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
  );
}

export default AddApplicationForm;
