import React from 'react';
import '../../view/register/RegisterPage.css';

const SignupForm = () => (
  <form className="form-section" method="POST">
    <h1>Sign Up</h1>
    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-person"></i></div>
        <input type="text" placeholder="Username" className="input" required />
      </div>
    </div>
    <label htmlFor="text">Min 5 characters, max 20 characters</label>

    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-envelope"></i></div>
        <input type="email" placeholder="Mail" className="input" required />
      </div>
    </div>

    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-key"></i></div>
        <input type="password" placeholder="Password" className="input" required />
      </div>
    </div>
    <label htmlFor="password">Min 8 characters, incl. upper, lower, num, symbol</label>

    <div className="input-group">
      <div className="input-row">
        <div className="icon-circle"><i className="bi bi-key"></i></div>
        <input type="password" placeholder="Repeat Password" className="input" required />
      </div>
    </div>
    <button type="submit" className="register-btn" id="signup-btn">Sign Up</button>
  </form>
);

export default SignupForm;