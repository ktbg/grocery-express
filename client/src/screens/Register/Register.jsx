import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom'
import { useState } from "react";
import Button from '../../components/Button/Button'
import '../../App.css'

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

const { name, email, password } = formData;
const { handleRegister } = props;

const handleChange = (e) => {
const { name, value } = e.target;
setFormData((prevState) => ({
  ...prevState,
  [name]: value,
}));
};
  return (
    <div className="sign-in-container">
    <h3 className="form-title">Sign Up</h3>
    <p className="form-helper">
      Have an account? <Link to='/login'>Sign In
      <span className="chevron">
        <ChevronRightIcon color="black" />
      </span></Link>
    </p>
    <form
      className="sign-up-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
        />
      </label>
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
  )
}

export default Register
