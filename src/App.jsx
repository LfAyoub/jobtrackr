import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Applications from "./pages/Applications";
import Home from "./pages/Home";
import AddApplication from "./pages/AddApplication";
import EditApplication from "./pages/EditApplication";
import Navbar from "./components/Navbar";
import { useApplications } from "./context/ApplicationContext";

function App() {
  const { applications } = useApplications();

  return (
    <>
      <p className="demoMessage">
        This is a demo version. Refreshing the page will reset the data.
      </p>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home data={applications} />} />
            <Route
              path="/applications"
              element={<Applications data={applications} />}
            />
            <Route path="/add-application" element={<AddApplication />} />
            <Route path="/edit-application/:id" element={<EditApplication />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
