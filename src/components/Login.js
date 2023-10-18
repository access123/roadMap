import React from 'react'
import { Link } from 'react-router-dom'
import { Input, FormHelperText, Button } from '@mui/joy';
import './styles/Login.css'
import Nav from './Nav'
const Login = () => {
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

    <div>
      <Nav titleLink={'Roadmap'} li1={'HOME'} li2={'ABOUT'} li3={'CONTACT'} />
      
        <div className="Container">
          <h3>Login</h3>
          <form action="#">
            <h5>Email</h5>
            <Input  className='items-c' type='email' color="neutral" size="lg" variant="outlined" sx={{ obj }} />
            <FormHelperText>Your email must contain @somaiya.edu</FormHelperText>
            <br />
            <h5 className='items-c' >Password</h5>
            <Input  className='items-c' type='password' color="neutral" size="lg" variant="outlined" sx={{ obj }} />
            <br />
            <div className="button-space">
              <Button className='mx-3' type='submit' color="neutral" onClick={function () { console.log("Submitted") }} size="sm" variant="solid">Submit</Button>
              <Link to="/signup"><h6>Register Now</h6></Link>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default Login
