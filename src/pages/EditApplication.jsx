import { useEffect } from "react";
import EditApplicationForm from "../components/EditApplicationForm";

function EditApplication() {
  useEffect(() => {
    document.title = "Edit an application - JobTrackR";
  }, []);
  return (
    <div>
      <EditApplicationForm />
    </div>
  );
}

export default EditApplication;
