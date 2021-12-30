import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { logout } from '../Actions';

function LoginButton() {
  const history = useHistory();
  const {isLogin, username} = useSelector(state => state.loginReducer)
  const dispatch = useDispatch();

  const onSignOut =()=> {
    history.push('/');
    dispatch(logout());
  }
  return (
      isLogin ? (
      <div>
        Welcome!{username}
        <button
          onClick={onSignOut}
        >
          Sign out
        </button>
      </div>
    ) : (
      <p>You are not logged in.</p>
    ))
}

export default LoginButton
