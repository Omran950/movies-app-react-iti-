import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { fetchSeries } from "../Controllers/MovieController";

export const SeriesPage = () => {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchSeries();
      setSeries(data);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      {series.map((serie) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={serie.id}>
          <Card type={"series"} item={serie} />
        </Grid>
      ))}
    </Grid>
  );
};
