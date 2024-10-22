import React, { useState, useEffect } from 'react';

const Account = ({ onLogout }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData')) || {};
    console.log('Fetched User Data:', userData); // Debugging line
    setFirstName(userData.firstName || '');
    setLastName(userData.lastName || '');
    setEmail(userData.email || '');
    setPhone(userData.phone || '');
    setAddress(userData.address || '');
  }, []);
  

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      email,
      phone,
      address,
    };
    localStorage.setItem('userData', JSON.stringify(updatedUser));
    console.log('Updated User Info:', updatedUser);
  };
  

  return (
    <div className="container">
      <h2>Your Account</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label>First Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input 
            type="text" 
            className="form-control" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input 
            type="tel" 
            className="form-control" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input 
            type="text" 
            className="form-control" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
        <button type="button" className="btn btn-danger" onClick={onLogout}>Logout</button>
      </form>
    </div>
  );
};

export default Account;
