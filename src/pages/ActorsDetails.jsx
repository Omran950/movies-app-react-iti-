import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchActorsDetails } from "../Controllers/MovieController";
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
} from "@mui/material";

const ActorsDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    const getDetails = async () => {
      const data = await fetchActorsDetails(id);
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
          image={`https://image.tmdb.org/t/p/w500/${details.profile_path}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Name : {details.name}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            Place of birth : {details.place_of_birth}
          </Typography>

          <Typography>Birthday : {details.birthday}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ActorsDetails;
