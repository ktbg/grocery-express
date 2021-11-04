import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom'
import { useState } from "react";
import './Login.css'
import '../../App.css'

const Login = (props) => {
  const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

  const { email, password } = formData;
  const { handleLogin, incorrectLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sign-in-container">
      <h3 className="form-title">Sign In</h3>
      <p className="form-helper">
        New to Grocery Express? <Link to='/register'>Sign Up
        <span className="chevron">
          <ChevronRightIcon color="black" />
        </span></Link>
      </p>
      <form
        className="sign-in-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <label>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />
        </label>
        {incorrectLogin ? <p className="danger">Email or password provided do not match</p> : null}
        <button className="user-form-button">Submit</button>
      </form>
    </div>
  );
};

export default Login;
