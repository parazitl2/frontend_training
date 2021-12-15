import { Button, Paper, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';

const Login = ({ performLogin }) => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
  } = useFormik({
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
    onSubmit: performLogin
  });

  return (
    <Paper
      elevation={3}
      sx={{
        width: 400,
        height: 350,
        margin: '100px auto',
        padding: '30px'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Typography variant='h4' component='h1' sx={{ marginBottom: '40px' }}>
          Log in, please
        </Typography>
        <TextField
          id="email"
          name="email"
          label="Email"
          value={values.email}
          onChange={handleChange}
          error={touched.email && !!errors.email}
          helperText={touched.email && errors.email}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={values.password}
          onChange={handleChange}
          error={touched.password && !!errors.password}
          helperText={touched.password && errors.password}
          sx={{ marginBottom: '20px' }}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          sx={{
            width: 150,
            marginTop: '20px'
          }}
        >
          Log in!
        </Button>
      </Box>
    </Paper>
  );
};

Login.propTypes = {
  performLogin: PropTypes.func
};

export default Login;
