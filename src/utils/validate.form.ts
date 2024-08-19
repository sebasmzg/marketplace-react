import * as yup from 'yup';

export const LoginValidate = yup.object().shape({
    email: yup.string().trim().email().required("Email is required"),
    password: yup.string().trim().required("Password is required"), 
});

