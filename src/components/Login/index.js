import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { userLoginRequest } from '../../ducks/user/slice';

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: 'admin@noveogroup.com',
      password: 'password'
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email addresss`')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required')
    }),
    onSubmit: values => {
      // same shape as initial values
      console.log(values);
      dispatch(userLoginRequest(values));
    }
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
    >

      {/* <form onSubmit={formik.handleSubmit}> */}
        <TextField
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && !!formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && !!formik.errors.password}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" type="submit">
          Login!
        </Button>
      {/* </form> */}
      </Box>
  );
};

export default Login;
