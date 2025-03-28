import ApplicationsList from "../components/ApplicationsList";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Applications.module.css";

function Applications({ data }) {
  const location = useLocation();
  const message = location.state?.message;

  useEffect(() => {
    document.title = "Your applications - JobTrackR";
  }, []);

  return (
    <div>
      {message && (
        <div className={styles.successMessage}>
          <div>{message}</div>
        </div>
      )}
      <ApplicationsList data={data} />
    </div>
  );
}

export default Applications;
