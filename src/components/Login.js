import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    onLogin({ email });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow" style={{ width: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="form-group mt-3">
              <label>Password:</label>
              <input 
                type="password" 
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block mt-4">Login</button>
          </form>
          <div className="text-center mt-3">
            <small>Don't have an account? <a href="/register">Register here</a></small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
