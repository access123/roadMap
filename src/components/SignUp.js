import React from 'react'
import "./styles/Login.css"
import {  Link } from 'react-router-dom'
import { Input, FormHelperText, Button } from '@mui/joy';
import Nav from './Nav'
const SignUp = () => {
  let obj = {
    '--Input-focusedInset': 'var(--any, )',
    '--Input-focusedThickness': '0.25rem',
    '--Input-focusedHighlight': 'rgba(13,110,253,.25)',
    '&::before': {
      transition: 'box-shadow .15s ease-in-out',
    },
    '&:focus-within': {
      borderColor: '#86b7fe',
    },
  };
  return (   
    <>
    <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={'CONTACT'} />

    <div className='Containerp'>
      <h3>Create an account</h3>
      <h6>Create an account to track your progress, showcase your skill-set and be a part of the community.</h6>

      <form action="#">
      <h5>Email</h5>
            <Input className='items-cp' type='email' color="neutral" size="sm" variant="outlined" sx={{ obj }} />
            <FormHelperText>Your email must contain @somaiya.edu</FormHelperText>
            <br />
            <h5 className='items-cp' >Password</h5>
            <Input className='items-cp' type='password' color="neutral" size="sm" variant="outlined" sx={{ obj }} />
            <br />
            <h5 className='items-cp' >Confirm Password</h5>
            <Input className='items-cp' type='password' color="neutral" size="sm" variant="outlined" sx={{ obj }} />
            <br />
            <h5 className='items-cp'>Enter Phone No.</h5>
            <Input className='items-cp' type='text' color="neutral" size="sm" variant="outlined" sx={{ obj }} />
            <br />
            <div className="button-space-p ">
              <Button type='submit' className='mx-3' color="neutral" onClick={function () { console.log("Submitted") }} size="md" variant="solid">Submit</Button>
              <Link to="/login"><h6>Already have account?</h6></Link>
            </div>
      </form>
    </div>
    </>
  )
}

export default SignUp;
