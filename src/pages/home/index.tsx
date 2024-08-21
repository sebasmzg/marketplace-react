import { Box, Button, Card, CircularProgress, Container, Grid } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components/header";
import { characters } from "../../services/characters";
import { CardComponent } from "../../components";
import { Gender, ICharacter, Species, Status } from "../../types/character";

/* const initialCharacter: Result = {
    id: 0,
    name: "",
    image: "",
    gender: Gender.Unknown,
    status: Status.Unknown,
    species: Species.Human,
    type: "",
    origin: {
        name: "",
        url: ""
    },
} */

export const HomePage: React.FC = () =>{
    
    const [allCharacters,setCharacters] = React.useState<ICharacter[] | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(()=>{ 
        setLoading(true);
        characters
            .getAll({page: 1})
            .then((res)=>{
                setCharacters(res.data.results);
                setTimeout(()=>setLoading(false),1000);        
            })
            .catch((err: Error)=>{
                {console.log(err)}
            });
    },[]);

    return (
        <Container  maxWidth="xl">
            <HeaderComponent
                title="Marketplace"
                description="Welcome to the best marketplace"
                element={
                    <Button variant="contained" fullWidth sx={{padding: "0.5rem", fontSize: "1.5rem"}}>Start</Button>
                }
            />
            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4}}>
                    <CircularProgress />
                </Box>
            ) : (

                <div>
                    {
                        allCharacters !== null && allCharacters.length !== 0 ? (
                            <Grid sx={{my:2}} container spacing={2} direction={"row"}>
                                {
                                    allCharacters!.map((character)=>(
                                        <Grid item xs={3}>
                                            <CardComponent 
                                                key={character.id}
                                                image={character.image}
                                                name={character.name}
                                                status={character.status}
                                                species={character.species}
                                                gender={character.gender}
                                                origin={character.origin}
                                            />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        ) : (
                            <h1>Loading...</h1>
                        )
                    }

                </div>
            )

            }
        </Container>
    )
}