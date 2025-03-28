import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ProfileContext = createContext();

// Provider qui englobe l'application
function ProfileProvider({ children }) {
  const [positions, setPositions] = useState([
    {
      id: 1,
      name: "Front-end developer",
    },
    {
      id: 2,
      name: "Back-end developer",
    },
    {
      id: 3,
      name: "Full-stack developer",
    },
  ]);
  const [skills, setSkills] = useState([
    {
      id: 1,
      name: "React",
    },
    {
      id: 2,
      name: "Node.js",
    },
    {
      id: 3,
      name: "PostgreSQL",
    },
  ]);
}
