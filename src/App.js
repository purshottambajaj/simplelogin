import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
  };

  const handleLogout = () => {
    setUser(null);
    // Optionally clear localStorage on logout
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MyApp</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/account">Account</Link>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-link nav-link" onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={user ? <Account user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account" element={user ? <Account user={user} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
