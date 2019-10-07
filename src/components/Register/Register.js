import React from 'react';
import './Register.scss';
import { Link } from "react-router-dom";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Register = ({ history, registerUser = f => f }) => {
  let _email, _password, _name;

  const handleLogin = e => {
    e.preventDefault();

    registerUser(_name.value, _email.value, _password.value);
  };
  return (
    <div className="content" id="main">
      <form id="login-form" action="" onSubmit={handleLogin} method="post">
        <h2>Register Form</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input ref={input => (_name = input)} style={styles.input} autoComplete="off" id="name-input" name="name" type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input ref={input => (_email = input)} style={styles.input} autoComplete="off" id="email-input" name="email" type="text" className="form-control" placeholder="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input ref={input => (_password = input)} style={styles.input} autoComplete="off" id="password-input" name="password" type="password" className="form-control" placeholder="password" />
        </div>
        <button type="submit" style={styles.button} className="btn btn-primary" id="email-login-btn" href="#facebook" >
          Register
        </button>
        <Link style={styles.link} to="/login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;