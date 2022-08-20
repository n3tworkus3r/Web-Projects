import React, { useContext, useEffect, useState } from 'react'
import './login.css'
import { use_http } from '../../../hooks/http.hook'
import { use_message } from '../../../hooks/message.hook'
import { auth_context } from '../../../context/auth_context'

export const LoginPage = () => { 

  const message = use_message()
  const auth = useContext(auth_context) 
  const { loading, request, error, clear_error } = use_http()
  const [ form, set_form ] = useState({ email: '', password: '' })

  const change_handler = event => { 
    set_form({ ...form, [event.target.name]: event.target.value })
  }

  ///////////// ERRORS VALIDATION /////////////
  useEffect( () => {
    message(error)
    clear_error()
  }, [ error, message, clear_error ])
  

  const register_handler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form})
      console.log('DATA', data)
    } catch (error) { }
  }

  
  const login_handler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form})
      auth.login(data.token, data.id)
    } catch (error) { }
  }

  return(
    <div id="login_box">
      <div className="login_form">
        <span id="login_title">LYNX<br/></span>
        <input  className="login_content" type="text" name="email" placeholder="Username" onChange={change_handler} required/>
        <input className="login_content" type="password" name="password" placeholder="Password" onChange={change_handler} required/>
        <button className="login_content" id="login_btn" type="submit" value="Login" onClick={login_handler}>Login</button>
        <button className="login_content" id="login_btn" type="submit" value="Register" onClick={register_handler} disabled={loading}>Register</button>
      </div>
    </div>
  )
}