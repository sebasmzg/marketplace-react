import { ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { CartComponent } from "./cart";
import { logout } from "../redux/slices/auth.slice";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = React.useState<boolean>(false);
  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  };
  const dispatch = useAppDispatch();
  const handlerLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Container maxWidth="xl">
            <Grid
              container
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Grid item>
                <Typography>Marketplace</Typography>
              </Grid>
              <Grid item>
                {isAuth ? (
                  <Stack direction={"row"} spacing={2}>
                  <IconButton
                    color="primary"
                    onClick={() => handleStateViewDrawer()}
                  >
                    <Badge color="error" badgeContent={items.length}>
                      <ShoppingCartOutlined />
                    </Badge>
                  </IconButton>
                  {/* <Button
                    variant="contained"
                    onClick={() => navigate("login")}
                  >
                    Login
                  </Button>
                  <Button variant="outlined">Register</Button> */}
                  <Button variant="contained" onClick={ ()=> handlerLogout() }>Logout</Button>
                </Stack>
                ) : (
                  "nothing"
                )}
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
      <CartComponent
        open={open}
        handleStateViewDrawer={handleStateViewDrawer}
      />
    </Box>
  );
};
