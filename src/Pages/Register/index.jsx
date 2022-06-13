import React from 'react';
import { useLocation } from 'react-router-dom';

const Register = () => {
  let { state } = useLocation();

  console.log(state);

  return <div>Register</div>;
};

export default Register;
