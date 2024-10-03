import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register-form">
      <h1>Sign up</h1>
      <div className="input-group">
        <label>
          E-mail address
        </label>
        <input type="email" />
      </div>
      <div className="input-group">
        <label>
          Password
        </label>
        <input type="password" />
      </div>
      <div className="input-group">
        <label>
          Confirm password
        </label>
        <input type="password" />
      </div>
      <div className="buttons">
        <button className="register-button">Sign up</button>
        <p>OR</p>
        <button className="register-button">
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Sign in</Link>
        </button>
      </div>
    </div>
  );
}

export default Register;
