import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Création du contexte
const ApplicationContext = createContext();

// Provider qui englobe l'application
function ApplicationProvider({ children }) {
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Facebook",
      position: "Front-end Developer",
      status: "Offer",
      date: "2025-03-11",
    },
    {
      id: 2,
      company: "Google",
      position: "Back-end Developer",
      status: "Rejected",
      date: "2025-03-08",
    },
    {
      id: 3,
      company: "Amazon",
      position: "Full Stack Developer",
      status: "Interview",
      date: "2025-03-01",
    },
  ]);

  // Fonction pour ajouter une candidature
  function addApplication(newApplication) {
    const applicationWithId = {
      ...newApplication,
      id: Date.now().toString(), // Génère un ID unique basé sur le timestamp
    };

    setApplications((prevApps) => [...prevApps, applicationWithId]);
  }

  // Fonction pour supprimer une candidature
  function deleteApplication(id) {
    setApplications((prevApps) =>
      prevApps.filter((application) => application.id !== id)
    );
  }

  function updateApplication(application) {
    setApplications((prevApps) => {
      const index = prevApps.findIndex((app) => app.id == application.id);
      prevApps[index] = application;
      return prevApps;
    });
  }

  return (
    <ApplicationContext.Provider
      value={{
        applications,
        addApplication,
        deleteApplication,
        updateApplication,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}

function useApplications() {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error(
      "useApplications must be used within an ApplicationProvider"
    );
  }
  return context;
}
ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ApplicationProvider, useApplications };
