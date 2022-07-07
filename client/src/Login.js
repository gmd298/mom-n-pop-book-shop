import React from 'react';
import { useDispatch } from 'react-redux';
import { login, logout } from './slices/user';

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button 
        onClick={() => {
          dispatch(login({ name: "Griffin", age: 1000, email: "griffin@gmail.com" }));
        }}
      >
        Login
      </button>

      <button 
        onClick={() => {
          dispatch(logout())
        }}
      >
        Logout
      </button>
    </div>
  )
}

export default Login;