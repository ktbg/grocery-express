import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link } from 'react-router-dom'
import { useState } from "react";
import '../../App.css'
import './Register.css'

const Register = (props) => {
  const [passwordError, setPasswordError] = useState(false);
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

const handleSubmit = (e) => {
  e.preventDefault();
  if (formData.password.length < 6){
    setPasswordError(true)
  }
  handleRegister(formData);
}

  return (
    <div className="sign-in-container"> {/* styles for this class are in Login.css */}
    <h3 className="form-title">Sign Up</h3>
    <p className="form-helper">
      Have an account? <Link to='/login'>Sign In
      <span className="chevron">
        <ChevronRightIcon color="black" sx={{ marginBottom: "-7px" }}/>
      </span></Link>
    </p>
    <form
      className="sign-up-form"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handleChange}
          required
        />
      </label>
      <label>
        <input
          type="text"
          name="email"
          value={email}
          placeholder="email"
          onChange={handleChange}
          required
        />
      </label>
        <input
          type="password"
          name="password"
          variant="outlined"
          value={password}
          placeholder="password"
          required
          onChange={handleChange}
        />
        <div>
        {passwordError ? <p className="danger">Password must be minimum 6 characters in length</p> : null}
        </div>
      <button className="user-form-button">Submit</button>
    </form>
  </div>
  )
}

export default Register
