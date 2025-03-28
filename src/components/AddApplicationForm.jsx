import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
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
    <form className={styles.form}>
      <div className={styles.formRow}>
        <FormControl sx={{ mx: "auto", mt: 3, minWidth: "90%" }}>
          <InputLabel htmlFor="application-name">Company</InputLabel>
          <Input
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.formRow}>
        <FormControl sx={{ mx: "auto", mt: 3, minWidth: "90%" }}>
          <InputLabel htmlFor="position">Position</InputLabel>
          <Input
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </FormControl>
      </div>
      <div className={styles.formRow}>
        <FormControl sx={{ mx: "auto", mt: 3, minWidth: "45%" }}>
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
        <FormControl sx={{ mx: "auto", mt: 3, minWidth: "45%" }}>
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
    </form>
  );
}

export default AddApplicationForm;
