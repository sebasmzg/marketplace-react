import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export const LoginPage: React.FC = () =>{

    type LoginProps = {
        email: string,
        password: string
    };

    const initialLoginData: LoginProps = {
        email: "",
        password: ""
    };

    const [loginData, setLoginData] = React.useState<LoginProps>({...initialLoginData});

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setLoginData({...loginData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log(loginData);
        
    };

    return (
        <Container maxWidth="sm">
            <Grid 
                container 
                direction={"column"} 
                alignItems={"center"} 
                justifyContent={"center"}
                sx={{minHeight: "100vh"}}
            >
                <Grid item>
                    <Paper sx={{padding: "1.2em", borderRadius: "0.5em"}}>
                        <Typography 
                            variant="h4" 
                            sx={{mt:1,mb:1}}
                        >
                            Sign in
                        </Typography>
                        <Box component={"form"} onSubmit={handleSubmit}>
                            <TextField
                                name="email"
                                margin="normal"
                                type="email" 
                                fullWidth 
                                label="Email" 
                                sx={{mt:2,mb:1.5}}
                                onChange={dataLogin}
                                required 
                            />
                            <TextField
                                name="password"
                                margin="normal"
                                type="password" 
                                fullWidth 
                                label="Password" 
                                sx={{mt:1.5,mb:1.5}}
                                onChange={dataLogin}
                                required 
                            />
                            <Button 
                                fullWidth 
                                type="submit" 
                                variant="contained"
                                sx={{mt:1.5,mb:2}}
                            >
                                Login
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}