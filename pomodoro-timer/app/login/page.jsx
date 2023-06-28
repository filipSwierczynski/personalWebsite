"use client"

import React, { useState, useEffect } from 'react';
import {signIn} from 'next-auth';


// const firebaseConfig = {
//   // Your Firebase configuration details here
//   apiKey: "AIzaSyBsn5tNFWoPNYM0P_E__tMJV6WgyXkNIrY",
//   authDomain: "tomadoro-ab0f7.firebaseapp.com",
//   projectId: "tomadoro-ab0f7",
//   storageBucket: "tomadoro-ab0f7.appspot.com",
//   messagingSenderId: "133118442137",
//   appId: "1:133118442137:web:79c67b14fd55e215bd5608",
//   measurementId: "G-31BK4ZCDNG"
// };

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');




  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect:false,
      email,
      password
    });

    if(!result.error){
      console.log('logged in', result);
    } else {
      console.log('error login');
    }

  };

  const handleGoogleLogin = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      await firebase.auth().signInWithPopup(provider);
      console.log('Logged in with Google successfully!');
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
      
    </form>
  );
};

export default LoginForm;
