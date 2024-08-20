import React from "react";
import { 
    Button, 
    Card, 
    CardActions, 
    CardContent, 
    CardMedia, 
    Divider, 
    Typography 
} from "@mui/material";
import { 
    Status ,
    Gender,
    Species,
    Location
} from "../../types/character";

type CardProps = {
    image: string,
    name: string,
    status:   Status;
    species:  Species;
    gender:   Gender;
    origin:   Location;
}

export const CardComponent: React.FC<CardProps> = ({image,name,status,species,gender,origin}) => {
    return (
        <Card>
            <CardMedia 
                component="img"
                height="194"
                image= {image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography 
                    variant="h4" 
                    color="text.secondary"
                    sx={{mb:1.5}}
                >
                    {name}
                </Typography>
                <Divider />
                <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{mt:1.5}}
                >
                    Status: {status} <br />
                    Specie: {species} <br />
                    Gender: {gender} <br />
                    Origin: {origin.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button 
                    variant="contained"
                    size="small"
                    fullWidth    
                >
                    More
                </Button>
            </CardActions>
        </Card>
    )
}