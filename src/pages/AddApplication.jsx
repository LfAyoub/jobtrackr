import { useEffect } from "react";
import AddApplicationForm from "../components/AddApplicationForm";

function AddApplication() {
  useEffect(() => {
    document.title = "Add an application - JobTrackR";
  }, []);

  return (
    <div>
      <h1 className="pageTitle">Add an application</h1>
      <AddApplicationForm />
    </div>
  );
}

export default AddApplication;
