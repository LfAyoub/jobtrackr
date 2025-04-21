import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import ApplicationItem from "./ApplicationItem";
import PropTypes from "prop-types";

function ApplicationTable({ filteredApplications, resultsNumber }) {
  return resultsNumber === 0 ? (
    <p style={{ textAlign: "center", marginTop: "100px", fontStyle: "italic" }}>
      No results
    </p>
  ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Position</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredApplications
            .slice()
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, resultsNumber)
            .map((application) => (
              <ApplicationItem application={application} key={application.id} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
ApplicationTable.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  filteredApplications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ).isRequired,
  resultsNumber: PropTypes.number.isRequired,
};

export default ApplicationTable;
