import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { fetchTVShow } from "../Controllers/MovieController";

export const TVShowsPage = () => {
  const [tvshows, setTVShows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTVShow();
      setTVShows(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {tvshows.map((tvshow) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={tvshow.id}>
          <Card type={"tvshows"} item={tvshow} />
        </Grid>
      ))}
    </Grid>
  );
};
