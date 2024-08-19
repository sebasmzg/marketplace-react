import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components/header";
import { characters } from "../../services/characters";

export const HomePage: React.FC = () =>{
    
    React.useEffect(()=>{
        characters.getAll({page: 1}).then((res)=>{
            console.log(res.data);            
        }).catch((err)=>{{console.log(err)}});
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
        </Container>
    )
}