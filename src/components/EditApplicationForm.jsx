import { useParams } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import styles from "./AddApplicationForm.module.css";
import FormButton from "./FormButton";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import { useApplications } from "../context/ApplicationContext";

function EditApplicationForm() {
  const { id } = useParams();
  const { applications, updateApplication } = useApplications();
  const application = applications.find((app) => app.id == id);
  const [company, setCompany] = useState(application.company);
  const [position, setPosition] = useState(application.position);
  const [status, setStatus] = useState(application.status);
  const [date, setDate] = useState(formatDate(application.date));
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  console.log("Editing application with id", id);

  function formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toISOString().split("T")[0];
  }

  function isValid(inputValue) {
    return inputValue.trim().length > 0;
  }

  function handleChange(event) {
    event.preventDefault();
    setStatus(event.target.value);
  }

  function handleSubmit() {
    if (!isValid(company) || !isValid(position) || !isValid(date)) {
      alert("Please fill in all fields");
      return;
    }
    const application = {
      id: id,
      company: company,
      position: position,
      status: status,
      date: date,
    };
    setIsLoading(true);
    updateApplication(application);
    setIsLoading(false);
    navigate("/applications");
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Box sx={{ mx: 1 }}>
      <h1 className="pageTitle">Edit application</h1>
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
          <FormControl sx={{ m: 1, minWidth: 200 }}>
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
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel htmlFor="date">Date</InputLabel>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </FormControl>
        </div>
        <Box sx={{ display: "flex", justifyContent: "space-between", mx: 2 }}>
          <FormButton onClick={() => navigate("/applications")} color="error">
            Back
          </FormButton>
          <FormButton onClick={handleSubmit} color="primary">
            Save
          </FormButton>
        </Box>
      </Container>
    </Box>
  );
}

export default EditApplicationForm;
