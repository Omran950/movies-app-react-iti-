import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Movie App
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Movies
        </Button>
        <Button color="inherit" component={Link} to="actors">
          Actors
        </Button>
        <Button color="inherit" component={Link} to="tvshows">
          TVShows
        </Button>
        <Button color="inherit" component={Link} to="series">
          Series
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
