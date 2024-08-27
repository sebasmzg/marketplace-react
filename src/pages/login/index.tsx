import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validate.form";
import { useFormik } from "formik";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { login } from "../../redux/slices/auth.slice";
import { Navigate, useNavigate } from "react-router-dom";

type LoginType = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.authReducer);
  const { getSuccess } = useNotification();
  const navigate = useNavigate();
  const formik = useFormik<LoginType>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginValidate,
    onSubmit: (values) => {
      dispatch(login());
      navigate("/");
      getSuccess(`Welcome ${values.email}`);
    },
  });

  return isAuth ? (
    <Navigate to="/" replace />
  ) : (
    <Container maxWidth="sm">
      <Grid
        container
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4" sx={{ mt: 1, mb: 1 }}>
              Sign in
            </Typography>
            <Box component={"form"} onSubmit={formik.handleSubmit}>
              <TextField
                id="email"
                label="Email"
                name="email"
                margin="normal"
                type="email"
                fullWidth
                sx={{ mt: 2, mb: 1.5 }}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <TextField
                id="password"
                name="password"
                margin="normal"
                type="password"
                fullWidth
                label="Password"
                sx={{ mt: 1.5, mb: 1.5 }}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginPage;
