import { useEffect, useState, useMemo } from "react";
import { Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FormButton from "./FormButton";
import Loading from "./Loading";
import SearchBar from "./SearchBar";
import ApplicationTable from "./ApplicationTable";

function ApplicationsList({ data }) {
  const [applications, setApplications] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resultsNumber, setResultsNumber] = useState(3);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setApplications(data);
    setIsLoading(false);
  }, [data]);

  function handleMore() {
    resultsNumber + 10 < applications.length
      ? setResultsNumber(resultsNumber + 10)
      : setResultsNumber(applications.length);
  }

  function handleDelete(id) {
    console.log("Deleting application with id", id);

    setApplications((prevApplications) =>
      prevApplications.filter((application) => application.id !== id)
    );

    navigate("/applications", {
      state: { message: "Application deleted successfully" },
    });
  }

  const filteredApplications = useMemo(() => {
    const filtered = applications.filter((application) => {
      const searchableText =
        `${application.position} ${application.company}`.toLowerCase();
      const keywords = search.toLowerCase().split(" ").filter(Boolean); // Découpe l'input en mots-clés

      // Vérifie que TOUS les mots-clés sont présents dans searchableText
      return keywords.every((word) => searchableText.includes(word));
    });
    setResultsNumber(filtered.length);
    return filtered;
  }, [search, applications]);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <h1 className="pageTitle">Applications list</h1>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p>
            {resultsNumber} of {filteredApplications.length} results
          </p>
          <SearchBar setSearch={setSearch} />
          <FormButton
            onClick={() => navigate("/add-application")}
            color="success"
          >
            New application
          </FormButton>
        </Box>
        <ApplicationTable
          handleDelete={handleDelete}
          filteredApplications={filteredApplications}
          resultsNumber={resultsNumber}
        />
      </Container>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {resultsNumber < filteredApplications.length && (
          <FormButton onClick={handleMore} color="info">
            See more
          </FormButton>
        )}
      </Box>
    </>
  );
}

export default ApplicationsList;
