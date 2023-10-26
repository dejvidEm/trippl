import React from 'react'

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <div className='w-[300px] h-[400px] bg-stone-200 p-5 rounded-xl mx-auto flex flex-col gap-3'>
      <h1 className='font-bold text-green-800 text-xl text-center'>Log in Form</h1>
      <TextField id="standard-basic" label="email" variant="standard"/>
      <TextField id="standard-basic" label="password" variant="standard"/>
      <br /><br /><br /><br /><br /><br />
      <Button variant="contained" color="success">Log In</Button>
    </div>
  )
}

export default LoginPage