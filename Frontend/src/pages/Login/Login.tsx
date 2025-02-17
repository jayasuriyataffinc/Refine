import React, { useState } from 'react';
import axios from 'axios'; 
import { LogIn, Eye, EyeOff, Mail, Lock, User2Icon } from "lucide-react";
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password
      });

      console.log('Login successful:', response.data);
      localStorage.setItem("token", response.data)

    } catch (error: any) {
      console.error('Login failed:', error.response?.data || error.message);
      setError("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <User2Icon className="w-16 h-16 mx-auto text-white" />
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Sign in to your secure account</p>
        </div>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <Mail className="input-icon" />
            <input
              type="text"
              className="input-field"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <Lock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              className="input-field"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-button">
            <LogIn />
            Login
          </button>
          <a style={{ color: "white", textDecoration: "none", fontWeight: "lighter", fontSize: "13px" }} href="/signup">Don't have an account <span style={{ textDecoration: "underline" }}>Click here</span></a>
        </form>
        <div className="divider">
          <span className="divider-text">Or continue with</span>
        </div>
        <div className="social-buttons">
          <button className="social-button">
            Google Account
          </button>
        </div>
      </div>
      {/* <img src={LoginImage} alt="Login" className="right-image" /> */}
    </div>
  );
};

export default Login;
