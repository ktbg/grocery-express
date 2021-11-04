import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import Button from '../../components/Button/Button'
import './Login.css'
import '../../App.css'

const Login = (props) => {
  const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

  const { email, password } = formData;
  const { handleLogin } = props;

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
        New to Grocery Express? Sign Up{" "}
        <span className="chevron">
          <ChevronRightIcon color="black" />
        </span>
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
        <Button redirectLocation="/" name="Sign In" className="form"/>
      </form>
    </div>
  );
};

export default Login;
