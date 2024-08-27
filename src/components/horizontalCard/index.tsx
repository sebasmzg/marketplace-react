import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/slices/cart.slice";
import CloseRounded from "@mui/icons-material/CloseRounded";

interface CardHorizontalComponentProps {
  id: string | number;
  image: string;
  name: string;
  info: string;
}

export const HorizontalCardComponent: React.FC<
  CardHorizontalComponentProps
> = ({ id, image, name, info }) => {
    const dispatch = useAppDispatch();
    const handlerRemoveFromCart = () => {
      dispatch(
        removeFromCart({
          id,
        })
      );
    };
  return (
    <Card sx={{ display: "flex", my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Rick and Morty"
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{info}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handlerRemoveFromCart}>
              <CloseRounded />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};
