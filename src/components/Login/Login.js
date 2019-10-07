import React from 'react';
import './Login.scss';
import { Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Login = ({ history, loginUser = f => f }) => {
  let _email, _password;
  const handleLogin = e => {
    e.preventDefault();
    loginUser(_email.value, _password.value);
  };
  return (
    <div className="content" id="main">
      <form id="login-form" action="" onSubmit={handleLogin} method="post">
        <h2>Login Form</h2>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input ref={input => (_email = input)} style={styles.input} autoComplete="off" id="email-input" name="email" type="text" className="form-control" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Password:</label>
          <input ref={input => (_password = input)} style={styles.input} autoComplete="off" id="password-input" name="password" type="password" className="form-control" placeholder="password" />
        </div>
        <button type="submit" style={styles.button} className="btn btn-primary" id="email-login-btn" href="#facebook" >
          Login
        </button>
        <Link style={styles.link} to="/register" >
        Register
      </Link>
      </form>
    </div>
  );
};

export default  Login;