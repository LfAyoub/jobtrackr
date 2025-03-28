import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Button, TextField, Grid } from "@mui/material";
import { useState } from "react";

function TestComponent() {
  const [value, setValue] = useState(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Nom" />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Email" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Envoyer</Button>
      </Grid>
      <Grid item xs={12}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Date de candidature"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
}

export default TestComponent;
