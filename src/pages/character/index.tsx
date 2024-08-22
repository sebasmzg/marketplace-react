import React from "react";
import { useParams } from "react-router-dom"
import { characters } from "../../services/characters";
import { ICharacter } from "../../types/character";
import { Box, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material";

export const CharacterPage: React.FC = () =>{
    const { id } = useParams();

    const [ loading, setLoading ] = React.useState<boolean>(true);
    const [ character, setCharacter ] = React.useState<ICharacter | null>(null);

    React.useEffect(()=>{
        characters.getById({id})
        .then((res) => {
            setCharacter(res.data);
            setLoading(false)
        })   
        .catch((err)=>console.log(err)
        )
    },[]);
    
    return (
        <Box sx={{width:"100%"}}>
            <Container>
                {loading ? (
                    <Box sx={{ display: "flex", justifyContent: "center", mt: 4}}>
                        <CircularProgress />
                    </Box>
                    ):(
                    <Grid container columnSpacing={2} sx={{mt: 2, alignItems: "center"}}>
                        <Grid item xs={6}>
                            <img src={character?.image} style={{width:"100%", borderRadius:"0.5em"}}></img>
                        </Grid>
                        <Grid item xs={6} sx={{alignItems: "center"}}>
                            <Box sx={{display: "flex", alignItems:"center"}}>
                                <Typography variant="h2">{character?.name}</Typography>
                                <Chip
                                    sx={{ml:2}}
                                    label={character?.status} 
                                    variant="outlined"
                                    color={character?.status === "Alive" ? "success" : "error"}
                                />
                            </Box>
                            <Divider sx={{my:2}}/>
                            <Typography variant="h6">Specie: {character?.species}</Typography>
                            <Typography variant ="h6">Gender: {character?.gender}</Typography>
                            <Typography variant="h6">Origin: {character?.origin.name}</Typography>
                            
                        </Grid>
                    </Grid>
                    )
                }
            </Container>
        </Box>
    )
}