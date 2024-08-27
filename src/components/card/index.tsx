import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Status, Gender, Species, Location } from "../../types/character";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cart.slice";

type CardProps = {
  image: string;
  name: string;
  status: Status;
  species: Species;
  gender: Gender;
  origin: Location;
  id: number;
};

export const CardComponent: React.FC<CardProps> = ({
  image,
  name,
  status,
  species,
  gender,
  origin,
  id,
}) => {
  let navigate = useNavigate();

  const [disabledBtn, setDisabledBtn] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const itemExist = useAppSelector((state) => state.cartReducer);

  //si el item existe en el carrito, deshabilita el boton
  React.useEffect(() => {
    setDisabledBtn(itemExist.some((item) => item.id === id));
  },[itemExist, id]);

  const addtoCartHandler = () => {
    dispatch(
      addToCart({
        id,
        name,
        image,
        info: `name: ${name} status:${status} specie:${species}`,
      })
    );
  };

  return (
    <Card>
      <CardMedia component="img" height="194" image={image} alt="Paella dish" />
      <CardContent>
        <Typography variant="h4" color="text.secondary" sx={{ mb: 1.5 }}>
          {name}
        </Typography>
        <Divider />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
          Status: {status} <br />
          Specie: {species} <br />
          Gender: {gender} <br />
          Origin: {origin.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          fullWidth
          onClick={() => navigate(`/character/${id}`)}
        >
          Details
        </Button>
        <Button
          fullWidth
          variant="contained"
          size="small"
          disabled={disabledBtn}
          onClick={addtoCartHandler}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};
