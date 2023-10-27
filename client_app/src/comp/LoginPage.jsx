import React, { useState } from 'react'

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Nastavenie typu obsahu
      },
      body: JSON.stringify(formData), // Prevod údajov na JSON a odoslanie
    })
      .then((response) => response.json())
      .then((formData) => {
       console.log("data boli uspesne spracovane, super David!");
       console.log(formData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='w-[300px] h-[400px] bg-stone-200 p-5 rounded-xl mx-auto'>
      <h1 className='font-bold text-green-800 text-xl text-center'>Log in Form</h1>
      <form onSubmit={handleSubmitLogin} className='flex flex-col gap-3'>
        <TextField id="standard-basic" name="email" label="email" variant="standard" onChange={handleChange}/>
        <TextField id="standard-basic" name="password" label="password" variant="standard" onChange={handleChange}/>
        <br /><br /><br /><br /><br /><br />
        <Button variant="contained" type='submit' color="success">Log In</Button>
      </form>
    </div>
  )
}

export default LoginPage