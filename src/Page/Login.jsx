import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="login-form">
      <h1>Sign in</h1>
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
      <div className="buttons">
        <button className="login-button">Sign in</button>
        <p>OR</p>
        <button className="login-button">
          <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>Sign up</Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
