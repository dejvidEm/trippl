import React, { useState } from 'react';

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const RegisterPage = () => {
  const [formData, setFormData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3001/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Nastavenie typu obsahu
      },
      body: JSON.stringify(formData), // Prevod údajov na JSON a odoslanie
    })
      .then((response) => response.json())
      .then((data) => {
       console.log('====================================');
       console.log("data boli uspesne spracovane, super David!");
       console.log(formData);
       console.log('====================================');
      })
      .catch((error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
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
      <h1 className='font-bold text-blue-800 text-xl text-center'>Register Form</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <TextField id="standard-basic" name="name" label="full name" variant="standard" onChange={handleChange}/>
        <TextField id="standard-basic" name="email" label="email" variant="standard" onChange={handleChange}/>
        <TextField id="standard-basic" name="password" label="password" variant="standard" onChange={handleChange}/>
        <TextField id="standard-basic" name="repeatPassword" label="repeatPassword" variant="standard" onChange={handleChange}/>
        <br />
        <Button variant="contained" type='submit' >Register</Button>
      </form>
    </div>
  )
}

export default RegisterPage