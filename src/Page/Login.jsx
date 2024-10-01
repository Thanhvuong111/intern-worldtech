import './Login.scss';
const Login = () => {
  return (
    <div className="login-form">
      <h1>Sign in</h1>
      <div className='input-group'>
        <label>
          E-mail address
          <input style={{marginLeft:30}}  type="email" />
        </label>
      </div>
      <div className='input-group'>
        <label>
          Password
          <input style={{marginLeft:66}} type="password" />
        </label>
      </div>
      <div className='buttons'>
      <button>Sign in</button>
      <p>OR</p>
      <button>Sign up</button>
      </div>
    </div>
  );
};
export default Login;