import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router'
import { login } from '../../Actions';
import './login.css'

function Login() {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const { from } = location.state || { from: { pathname: "/" } };

  const handleUsername = e => {
    setUser(e.target.value)
    setError(false);
  }

  const handlePassword = e => {
    setPassword(e.target.value)
    setError(false);
  }

  const handleOnSubmit =e=> {
    e.preventDefault();
    if(user === 'suman' && password === '12345') {
      dispatch(login(user));
      history.replace(from)
  } else {
    setError(true);
  }
  }

  return (
    <div className="form_container">
      <h1>Log In</h1>
      <form onSubmit={handleOnSubmit}>
      <label htmlFor="user">Username   
        <input id='user' name='user' type="text" onChange={handleUsername} />
      </label>
      <label htmlFor="password">Password
        <input id='password' name='password' type="password" onChange={handlePassword} />
      </label>
      {
        error ? <p className='error'>*Please enter correct username and password.</p> : null
      }
      <button type="submit">Log In</button>
    </form>
    </div>
  )
}

export default Login
