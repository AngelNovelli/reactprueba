import React from 'react';
import '../../view/register/RegisterPage.css';

const LoginForm = () => (
  <form className="form-section" method="POST">
    <h1>Login</h1>
    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-person"></i></div>
        <input type="text" placeholder="Username" className="input" />
      </div>
    </div>
    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-key"></i></div>
        <input type="password" placeholder="Password" className="input" />
      </div>
    </div>
    <button type="submit" className="register-btn">Login</button>
  </form>
);

export default LoginForm;