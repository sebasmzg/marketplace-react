import { Button, Container } from "@mui/material";
import React from "react";
import { HeaderComponent } from "../../components/header";

export const HomePage: React.FC = () =>{
    
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