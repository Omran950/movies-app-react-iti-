

import { Card as MUICard, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";



export const Card = ({ item, type }) => {

    return <Link to={`/${type}/${item.id}`}>
        <MUICard>
            <CardMedia
                component='img'
                height={150}
                image={item.image || `https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Title : {item.title || item.name}
                </Typography>

                <Typography variant="body2" color="text.secondary"> Rating : {item.vote_average} </Typography>
            </CardContent>
        </MUICard>

    </Link>

}