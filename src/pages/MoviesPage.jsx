import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { fetchMovies } from "../Controllers/MovieController";




export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetchMovies();
            setMovies(data);
            console.log(data);
        }

        fetchData();

    }, []);

    return (

        <Grid container spacing={2} sx={{ padding: "20px" }}>
            {movies.map((movie) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                    <Card type={'movie'} item={movie} />
                </Grid>
            ))}
        </Grid>
    );


}