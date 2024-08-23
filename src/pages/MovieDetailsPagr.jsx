import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Controllers/MovieController";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";

const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchMovieDetails(id);
      setDetails(data);
      console.log(data);
    };

    getDetails();
  }, [id]);

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height={500}
          image={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title : {details.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            rating: {details.vote_average}
          </Typography>

          <Typography>line: {details.tagline}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MovieDetails;
