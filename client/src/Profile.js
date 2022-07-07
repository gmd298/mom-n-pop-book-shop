import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Login';

function Profile() {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  console.log('themeColor', themeColor);

  return (
    <div>
      <Login />
      <div style={{color: themeColor}}>
        <h1>Profile Page</h1>
        <p>Name: {user.name} </p>
        <p>Age: {user.age} </p>
        <p>eMail: {user.email} </p>
      </div>
    </div>
  )
}

export default Profile;