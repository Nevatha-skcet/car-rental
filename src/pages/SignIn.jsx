import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { Link } from "react-router-dom";
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('http://localhost:9000/getuser');

      const users = response.data;

      if (users.some((user) => user.password === password)) {
        console.log('Sign-in successful:');
        navigate('/'); 
      } else {
        alert("User does not exist");
      }

    } catch (error) {
      console.error('There was an error signing in:', error);
      alert('Invalid email or password');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div className="signin-container">
      <div className="signin-form">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
          <Link to="/">Sign In</Link>
          </button>
        </form>
        <button onClick={handleRegisterClick} className="register-button">Register</button>
      </div>
    </div>
  );
};

export default SignIn;
