import React from 'react'
import "./Login.css"
import { Button } from '@mui/material'
import axios from "axios"
import {auth, provider} from "../../firebase"

const Login = () => {

  const signIn = () => {
    // sign in stuff
  }
  return (
    <div className='login'>
      <div className="login__logo">
      


      </div>
      <Button type="submit" onClick={signIn}>Sign in</Button>
      
    </div>
  )
}

export default Login