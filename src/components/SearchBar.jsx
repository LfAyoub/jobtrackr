import { TextField } from "@mui/material";
import PropTypes from "prop-types";

function SearchBar({ setSearch }) {
  return (
    <TextField
      id="outlined-basic"
      label="Search"
      variant="outlined"
      onChange={(e) => setSearch(e.target.value)}
      sx={{ backgroundColor: "white" }}
    />
  );
}
SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default SearchBar;
