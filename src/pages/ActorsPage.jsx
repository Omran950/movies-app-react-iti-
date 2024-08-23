import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import { Card } from "../Components/Card";
import { fetchActors } from "../Controllers/MovieController";




export default function ActorsPage() {
    const [actors, setActors] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetchActors();
            setActors(data);
            console.log(data);
        }

        fetchData();

    }, []);


    return (

        <Grid container spacing={2} sx={{ padding: "20px" }}>
            {actors.map((actor) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={actor.id}>
                    <Card type={'actors'} item={{
                        ...actor,
                        image: `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    }} />
                </Grid>
            ))}
        </Grid>
    );


}