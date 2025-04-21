import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, Language } from "@mui/icons-material";

export default function ProfileCard({ user }) {
  return (
    <Card
      sx={{
        p: 2,
        boxShadow: 3,
        borderRadius: "4px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "30%",
          backgroundColor: "primary.main",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
        }}
      />

      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: 160,
              height: 160,
              zIndex: 1,
              border: "3px solid white",
            }}
            src={user.avatar}
          >
            {user.name.charAt(0)}
          </Avatar>
        }
        title={
          <Typography variant="h5" fontWeight="bold" textAlign="center">
            {user.name}
          </Typography>
        }
        subheader={
          <Typography variant="body2" color="text.secondary" textAlign="center">
            <a href="mailto:a.lafdail@outlook.fr">{user.email}</a>
          </Typography>
        }
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          pt: 4,
        }}
      />

      <CardContent>
        <Typography
          variant="body1"
          textAlign="center"
          color="text.primary"
          sx={{ fontStyle: "italic" }}
        >
          {user.bio}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: "center", gap: 1 }}>
        <IconButton
          component="a"
          href={user.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedIn fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href={user.github}
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
        >
          <GitHub fontSize="large" />
        </IconButton>
        <IconButton
          component="a"
          href={user.website}
          target="_blank"
          rel="noopener noreferrer"
          color="secondary"
        >
          <Language fontSize="large" color="primary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
