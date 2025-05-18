import React from 'react';
import '../assets/style/Login.css'

function Login() {
  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2>Login</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" className="login-btn">Login</button>
          </form>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
