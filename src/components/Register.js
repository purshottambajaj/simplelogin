import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate(); // Use useNavigate for navigation
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userData = {
      firstName,
      lastName,
      email,
      password,
      phone,
      address,
    };
  
    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    
    console.log('Registered:', userData);
    
    // After saving data, redirect to the home page
    navigate('/');
  };
  

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            className="form-control" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input 
            type="text" 
            className="form-control" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default Register;
