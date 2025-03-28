import LastApplications from "../components/LastApplications";
import ApplicationsStats from "../components/ApplicationsStats";
import MyDocuments from "../components/MyDocuments";
import MyProfile from "../components/MyProfile";
import ProfileCard from "../components/ProfileCard";
import { Container, Grid } from "@mui/material";
import { useEffect } from "react";

function Home({ data }) {
  useEffect(() => {
    document.title = "JobTrackR - Track smarter";
  }, []);
  const user = {
    avatar: "/profile.jpg",
    name: "Ayoub Lafdail",
    title: "Web Developer",
    email: "a.lafdail@outlook.fr",
    bio: "Passionate web developer, always learning and improving. Love building user-friendly applications!",
    linkedin: "https://linkedin.com/in/lafdail",
    github: "https://github.com/LfAyoub",
    website: "https://lafdail.dev",
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      <h1 className="pageTitle">Welcome back, Ayoub</h1>
      <Grid container spacing={3} pt={5}>
        <Grid item xs={12} md={6}>
          {/* <MyProfile /> */}
          <ProfileCard user={user} />
        </Grid>

        <Grid item xs={12} md={6}>
          <MyDocuments />
        </Grid>

        <Grid item xs={12} md={6}>
          <LastApplications data={data} />
        </Grid>

        <Grid item xs={12} md={6}>
          <ApplicationsStats data={data} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
